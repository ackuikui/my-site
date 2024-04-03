<template>

  <span
    id="tmp"
    style="
      max-width: 200px;
      display: inline-block;
      word-break: break-word;
      opacity: 0;
      line-height: 1.3;
      padding: 4px;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
    "
  ></span>

  <canvas
    id="myCanvas"
    @click="clickCanvasFn"
    @mousemove="hoverCanvasFn"
    width="500"
    height="800"
    style="margin: auto"
  ></canvas>
</template>

<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const list = navigation._rawValue[1].children; // memo文件夹
console.log(list);

// 规则图形区域点击
let pointArr = [
  // {x: 0, y: 0, x1: 0, y1: 0, path: ''}
];

let timer = null;
function hoverCanvasFn(e) {
  if (timer) {
    return;
  } else {
    timer = setTimeout(() => {
      timer = null;
      clickCanvasFn(e, true);
    }, 50);
  }
}

function clickCanvasFn(e, isHover) {
  let canvas = document.getElementById("myCanvas");
  let x = e.pageX;
  let y = e.pageY;
  // 计算鼠标在canvas画布中的相对位置
  x = x - canvas.offsetLeft;
  y = y - canvas.offsetTop;

  // console.log(pointArr);
  // console.log(x, y);
  canvas.style.cursor = "default";
  for (const btn of pointArr) {
    if (x >= btn.x && x <= btn.x + btn.w && y >= btn.y && y <= btn.y + btn.h) {
      if (isHover) {
        canvas.style.cursor = "pointer";
      } else {
        return navigateTo(btn.path);
      }
    }
  }
}

onMounted(() => {
  document.title = "随笔记录";
  var $tmp = document.getElementById("tmp");

  calcute(list, $tmp);
  console.log(list);

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  draw(list, ctx, 10, 10);
});

function draw(list, ctx, sx = 0, sy = 0, parentEnd) {
  let startX = sx;
  let startY = sy;

  for (const item of list) {
    let midH = (item.height - 5) / 2;
    let textMidH = item.textH / 2;

    ctx.beginPath();
    ctx.roundRect(startX, startY + midH - textMidH, item.textW, item.textH, 10);
    ctx.strokeStyle = "#a855f7";
    ctx.stroke();

    if (!item.children) {
      pointArr.push({
        x: startX,
        y: startY + midH - textMidH,
        w: item.textW,
        h: item.textH,
        path: item._path,
      });
      ctx.fillStyle = "#a855f7";
      ctx.fill();
    } else {
      draw(item.children, ctx, sx + item.textW + 20, startY, {
        x: startX + item.textW,
        y: startY + midH,
      });
    }

    // 连线
    if (parentEnd) {
      ctx.moveTo(parentEnd.x, parentEnd.y);
      ctx.lineTo(startX, startY + midH);
      ctx.stroke();
    }

    // 文字
    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.fillText(item.title, startX + 10, startY + midH + 5);

    startY += item.height;
  }
}

function calcute(arr, $tmp) {
  let height = 0;
  for (const item of arr) {
    let h = 0;
    if (!item.children) {
      h = drawNode(item, $tmp);
    } else {
      drawNode(item, $tmp);
      h = calcute(item.children, $tmp);
    }
    item.height = h; // 当前节点高度
    height += h;
  }
  return height; // 高度为子元素高度和
}

function drawNode(node, $tmp) {
  $tmp.innerText = node.title;
  node.textW = $tmp.clientWidth + 10;
  node.textH = $tmp.clientHeight;
  return node.textH + 10;
}
</script>

<style lang="scss" scoped></style>
