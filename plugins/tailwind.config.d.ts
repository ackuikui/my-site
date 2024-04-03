
// 取自content.nuxt.com源码doc运行生成的\.nuxt\types\tailwind.config.d.ts
// 本项目中无使用，仅供参考

declare module "#tailwind-config/theme/aspectRatio" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _13: "13";
  export const _14: "14";
  export const _15: "15";
  export const _16: "16";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "13": typeof _13;
    "14": typeof _14;
    "15": typeof _15;
    "16": typeof _16;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/typography" {
  export const _DEFAULT: {
    css: [
      {
        color: "var(--tw-prose-body)";
        maxWidth: "65ch";
        p: {};
        '[class~="lead"]': { color: "var(--tw-prose-lead)" };
        a: {
          color: "var(--tw-prose-links)";
          textDecoration: "underline";
          fontWeight: "500";
        };
        strong: { color: "var(--tw-prose-bold)"; fontWeight: "600" };
        "a strong": { color: "inherit" };
        "blockquote strong": { color: "inherit" };
        "thead th strong": { color: "inherit" };
        ol: { listStyleType: "decimal" };
        'ol[type="A"]': { listStyleType: "upper-alpha" };
        'ol[type="a"]': { listStyleType: "lower-alpha" };
        'ol[type="A" s]': { listStyleType: "upper-alpha" };
        'ol[type="a" s]': { listStyleType: "lower-alpha" };
        'ol[type="I"]': { listStyleType: "upper-roman" };
        'ol[type="i"]': { listStyleType: "lower-roman" };
        'ol[type="I" s]': { listStyleType: "upper-roman" };
        'ol[type="i" s]': { listStyleType: "lower-roman" };
        'ol[type="1"]': { listStyleType: "decimal" };
        ul: { listStyleType: "disc" };
        "ol > li::marker": {
          fontWeight: "400";
          color: "var(--tw-prose-counters)";
        };
        "ul > li::marker": { color: "var(--tw-prose-bullets)" };
        dt: { color: "var(--tw-prose-headings)"; fontWeight: "600" };
        hr: { borderColor: "var(--tw-prose-hr)"; borderTopWidth: 1 };
        blockquote: {
          fontWeight: "500";
          fontStyle: "italic";
          color: "var(--tw-prose-quotes)";
          borderInlineStartWidth: "0.25rem";
          borderInlineStartColor: "var(--tw-prose-quote-borders)";
          quotes: '"\\201C""\\201D""\\2018""\\2019"';
        };
        "blockquote p:first-of-type::before": { content: "open-quote" };
        "blockquote p:last-of-type::after": { content: "close-quote" };
        h1: { color: "var(--tw-prose-headings)"; fontWeight: "800" };
        "h1 strong": { fontWeight: "900"; color: "inherit" };
        h2: { color: "var(--tw-prose-headings)"; fontWeight: "700" };
        "h2 strong": { fontWeight: "800"; color: "inherit" };
        h3: { color: "var(--tw-prose-headings)"; fontWeight: "600" };
        "h3 strong": { fontWeight: "700"; color: "inherit" };
        h4: { color: "var(--tw-prose-headings)"; fontWeight: "600" };
        "h4 strong": { fontWeight: "700"; color: "inherit" };
        img: {};
        picture: { display: "block" };
        video: {};
        kbd: {
          fontWeight: "500";
          fontFamily: "inherit";
          color: "var(--tw-prose-kbd)";
          boxShadow: "0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)";
        };
        code: { color: "var(--tw-prose-code)"; fontWeight: "600" };
        "code::before": { content: '"`"' };
        "code::after": { content: '"`"' };
        "a code": { color: "inherit" };
        "h1 code": { color: "inherit" };
        "h2 code": { color: "inherit" };
        "h3 code": { color: "inherit" };
        "h4 code": { color: "inherit" };
        "blockquote code": { color: "inherit" };
        "thead th code": { color: "inherit" };
        pre: {
          color: "var(--tw-prose-pre-code)";
          backgroundColor: "var(--tw-prose-pre-bg)";
          overflowX: "auto";
          fontWeight: "400";
        };
        "pre code": {
          backgroundColor: "transparent";
          borderWidth: "0";
          borderRadius: "0";
          padding: "0";
          fontWeight: "inherit";
          color: "inherit";
          fontSize: "inherit";
          fontFamily: "inherit";
          lineHeight: "inherit";
        };
        "pre code::before": { content: "none" };
        "pre code::after": { content: "none" };
        table: {
          width: "100%";
          tableLayout: "auto";
          textAlign: "start";
          marginTop: "2em";
          marginBottom: "2em";
        };
        thead: {
          borderBottomWidth: "1px";
          borderBottomColor: "var(--tw-prose-th-borders)";
        };
        "thead th": {
          color: "var(--tw-prose-headings)";
          fontWeight: "600";
          verticalAlign: "bottom";
        };
        "tbody tr": {
          borderBottomWidth: "1px";
          borderBottomColor: "var(--tw-prose-td-borders)";
        };
        "tbody tr:last-child": { borderBottomWidth: "0" };
        "tbody td": { verticalAlign: "baseline" };
        tfoot: {
          borderTopWidth: "1px";
          borderTopColor: "var(--tw-prose-th-borders)";
        };
        "tfoot td": { verticalAlign: "top" };
        "figure > *": {};
        figcaption: { color: "var(--tw-prose-captions)" };
      },
      {
        "--tw-prose-body": "#374151";
        "--tw-prose-headings": "#111827";
        "--tw-prose-lead": "#4b5563";
        "--tw-prose-links": "#111827";
        "--tw-prose-bold": "#111827";
        "--tw-prose-counters": "#6b7280";
        "--tw-prose-bullets": "#d1d5db";
        "--tw-prose-hr": "#e5e7eb";
        "--tw-prose-quotes": "#111827";
        "--tw-prose-quote-borders": "#e5e7eb";
        "--tw-prose-captions": "#6b7280";
        "--tw-prose-kbd": "#111827";
        "--tw-prose-kbd-shadows": "17 24 39";
        "--tw-prose-code": "#111827";
        "--tw-prose-pre-code": "#e5e7eb";
        "--tw-prose-pre-bg": "#1f2937";
        "--tw-prose-th-borders": "#d1d5db";
        "--tw-prose-td-borders": "#e5e7eb";
        "--tw-prose-invert-body": "#d1d5db";
        "--tw-prose-invert-headings": "#fff";
        "--tw-prose-invert-lead": "#9ca3af";
        "--tw-prose-invert-links": "#fff";
        "--tw-prose-invert-bold": "#fff";
        "--tw-prose-invert-counters": "#9ca3af";
        "--tw-prose-invert-bullets": "#4b5563";
        "--tw-prose-invert-hr": "#374151";
        "--tw-prose-invert-quotes": "#f3f4f6";
        "--tw-prose-invert-quote-borders": "#374151";
        "--tw-prose-invert-captions": "#9ca3af";
        "--tw-prose-invert-kbd": "#fff";
        "--tw-prose-invert-kbd-shadows": "255 255 255";
        "--tw-prose-invert-code": "#fff";
        "--tw-prose-invert-pre-code": "#d1d5db";
        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
        "--tw-prose-invert-th-borders": "#4b5563";
        "--tw-prose-invert-td-borders": "#374151";
      },
      {
        fontSize: "1rem";
        lineHeight: "1.75";
        p: { marginTop: "1.25em"; marginBottom: "1.25em" };
        '[class~="lead"]': {
          fontSize: "1.25em";
          lineHeight: "1.6";
          marginTop: "1.2em";
          marginBottom: "1.2em";
        };
        blockquote: {
          marginTop: "1.6em";
          marginBottom: "1.6em";
          paddingInlineStart: "1em";
        };
        h1: {
          fontSize: "2.25em";
          marginTop: "0";
          marginBottom: "0.8888889em";
          lineHeight: "1.1111111";
        };
        h2: {
          fontSize: "1.5em";
          marginTop: "2em";
          marginBottom: "1em";
          lineHeight: "1.3333333";
        };
        h3: {
          fontSize: "1.25em";
          marginTop: "1.6em";
          marginBottom: "0.6em";
          lineHeight: "1.6";
        };
        h4: { marginTop: "1.5em"; marginBottom: "0.5em"; lineHeight: "1.5" };
        img: { marginTop: "2em"; marginBottom: "2em" };
        picture: { marginTop: "2em"; marginBottom: "2em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "2em"; marginBottom: "2em" };
        kbd: {
          fontSize: "0.875em";
          borderRadius: "0.3125rem";
          paddingTop: "0.1875em";
          paddingInlineEnd: "0.375em";
          paddingBottom: "0.1875em";
          paddingInlineStart: "0.375em";
        };
        code: { fontSize: "0.875em" };
        "h2 code": { fontSize: "0.875em" };
        "h3 code": { fontSize: "0.9em" };
        pre: {
          fontSize: "0.875em";
          lineHeight: "1.7142857";
          marginTop: "1.7142857em";
          marginBottom: "1.7142857em";
          borderRadius: "0.375rem";
          paddingTop: "0.8571429em";
          paddingInlineEnd: "1.1428571em";
          paddingBottom: "0.8571429em";
          paddingInlineStart: "1.1428571em";
        };
        ol: {
          marginTop: "1.25em";
          marginBottom: "1.25em";
          paddingInlineStart: "1.625em";
        };
        ul: {
          marginTop: "1.25em";
          marginBottom: "1.25em";
          paddingInlineStart: "1.625em";
        };
        li: { marginTop: "0.5em"; marginBottom: "0.5em" };
        "ol > li": { paddingInlineStart: "0.375em" };
        "ul > li": { paddingInlineStart: "0.375em" };
        "> ul > li p": { marginTop: "0.75em"; marginBottom: "0.75em" };
        "> ul > li > *:first-child": { marginTop: "1.25em" };
        "> ul > li > *:last-child": { marginBottom: "1.25em" };
        "> ol > li > *:first-child": { marginTop: "1.25em" };
        "> ol > li > *:last-child": { marginBottom: "1.25em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.75em";
          marginBottom: "0.75em";
        };
        dl: { marginTop: "1.25em"; marginBottom: "1.25em" };
        dt: { marginTop: "1.25em" };
        dd: { marginTop: "0.5em"; paddingInlineStart: "1.625em" };
        hr: { marginTop: "3em"; marginBottom: "3em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.875em"; lineHeight: "1.7142857" };
        "thead th": {
          paddingInlineEnd: "0.5714286em";
          paddingBottom: "0.5714286em";
          paddingInlineStart: "0.5714286em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.5714286em";
          paddingInlineEnd: "0.5714286em";
          paddingBottom: "0.5714286em";
          paddingInlineStart: "0.5714286em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "2em"; marginBottom: "2em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.875em";
          lineHeight: "1.4285714";
          marginTop: "0.8571429em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      },
      {
        "h1, h2, h3, h4": {
          fontWeight: "700";
          "scroll-margin-top": "var(--scroll-mt)";
        };
        "h1 a, h2 a, h3 a, h4 a": {
          borderBottom: "none !important";
          color: "inherit";
          fontWeight: "inherit";
        };
        a: {
          fontWeight: "500";
          textDecoration: "none";
          borderBottom: "1px solid transparent";
        };
        "a:hover": { borderColor: "var(--tw-prose-links)" };
        "a:has(> code)": { borderColor: "transparent !important" };
        "a code": {
          color: "var(--tw-prose-code)";
          border: "1px dashed var(--tw-prose-pre-border)";
        };
        "a:hover code": {
          color: "var(--tw-prose-links)";
          borderColor: "var(--tw-prose-links)";
        };
        pre: {
          borderRadius: "0.375rem";
          border: "1px solid var(--tw-prose-pre-border)";
          color: "var(--tw-prose-pre-code) !important";
          backgroundColor: "var(--tw-prose-pre-bg) !important";
          whiteSpace: "pre-wrap";
          wordBreak: "break-word";
        };
        code: {
          backgroundColor: "var(--tw-prose-pre-bg)";
          padding: "0 0.375rem";
          display: "inline-block";
          borderRadius: "0.375rem";
          border: "1px solid var(--tw-prose-pre-border)";
        };
        "code::before": { content: "" };
        "code::after": { content: "" };
        "blockquote p:first-of-type::before": { content: "" };
        "blockquote p:last-of-type::after": { content: "" };
        'input[type="checkbox"]': {
          color: "rgb(var(--color-primary-500))";
          borderRadius: "0.25rem";
          borderColor: "rgb(var(--color-gray-300))";
          height: "1rem";
          width: "1rem";
          marginTop: "-3.5px !important";
          marginBottom: "0 !important";
          "&:focus": { "--tw-ring-offset-width": 0 };
        };
        'input[type="checkbox"]:checked': {
          borderColor: "rgb(var(--color-primary-500))";
        };
        'input[type="checkbox"]:disabled': {
          opacity: 0.5;
          cursor: "not-allowed";
        };
        "ul.contains-task-list": { marginLeft: "-1.625em" };
        "ul ul": { paddingLeft: "1.5rem" };
        "ul ol": { paddingLeft: "1.5rem" };
        "ul > li.task-list-item": { paddingLeft: "0 !important" };
        "ul > li.task-list-item input": { marginRight: "7px" };
        "ul > li.task-list-item > ul.contains-task-list": {
          marginLeft: "initial";
        };
        "ul > li.task-list-item a": { marginBottom: 0 };
        "ul > li.task-list-item::marker": { content: "none" };
        "ul > li > p": { margin: 0 };
        "ul > li > span.issue-badge, p > span.issue-badge": {
          verticalAlign: "text-top";
          margin: "0 !important";
        };
        "ul > li > button": { verticalAlign: "baseline !important" };
        table: { display: "block"; overflowX: "auto" };
        "table code": { display: "inline-flex" };
      }
    ];
  };
  export const _sm: {
    css: [
      {
        fontSize: "0.875rem";
        lineHeight: "1.7142857";
        p: { marginTop: "1.1428571em"; marginBottom: "1.1428571em" };
        '[class~="lead"]': {
          fontSize: "1.2857143em";
          lineHeight: "1.5555556";
          marginTop: "0.8888889em";
          marginBottom: "0.8888889em";
        };
        blockquote: {
          marginTop: "1.3333333em";
          marginBottom: "1.3333333em";
          paddingInlineStart: "1.1111111em";
        };
        h1: {
          fontSize: "2.1428571em";
          marginTop: "0";
          marginBottom: "0.8em";
          lineHeight: "1.2";
        };
        h2: {
          fontSize: "1.4285714em";
          marginTop: "1.6em";
          marginBottom: "0.8em";
          lineHeight: "1.4";
        };
        h3: {
          fontSize: "1.2857143em";
          marginTop: "1.5555556em";
          marginBottom: "0.4444444em";
          lineHeight: "1.5555556";
        };
        h4: {
          marginTop: "1.4285714em";
          marginBottom: "0.5714286em";
          lineHeight: "1.4285714";
        };
        img: { marginTop: "1.7142857em"; marginBottom: "1.7142857em" };
        picture: { marginTop: "1.7142857em"; marginBottom: "1.7142857em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "1.7142857em"; marginBottom: "1.7142857em" };
        kbd: {
          fontSize: "0.8571429em";
          borderRadius: "0.3125rem";
          paddingTop: "0.1428571em";
          paddingInlineEnd: "0.3571429em";
          paddingBottom: "0.1428571em";
          paddingInlineStart: "0.3571429em";
        };
        code: { fontSize: "0.8571429em" };
        "h2 code": { fontSize: "0.9em" };
        "h3 code": { fontSize: "0.8888889em" };
        pre: {
          fontSize: "0.8571429em";
          lineHeight: "1.6666667";
          marginTop: "1.6666667em";
          marginBottom: "1.6666667em";
          borderRadius: "0.25rem";
          paddingTop: "0.6666667em";
          paddingInlineEnd: "1em";
          paddingBottom: "0.6666667em";
          paddingInlineStart: "1em";
        };
        ol: {
          marginTop: "1.1428571em";
          marginBottom: "1.1428571em";
          paddingInlineStart: "1.5714286em";
        };
        ul: {
          marginTop: "1.1428571em";
          marginBottom: "1.1428571em";
          paddingInlineStart: "1.5714286em";
        };
        li: { marginTop: "0.2857143em"; marginBottom: "0.2857143em" };
        "ol > li": { paddingInlineStart: "0.4285714em" };
        "ul > li": { paddingInlineStart: "0.4285714em" };
        "> ul > li p": {
          marginTop: "0.5714286em";
          marginBottom: "0.5714286em";
        };
        "> ul > li > *:first-child": { marginTop: "1.1428571em" };
        "> ul > li > *:last-child": { marginBottom: "1.1428571em" };
        "> ol > li > *:first-child": { marginTop: "1.1428571em" };
        "> ol > li > *:last-child": { marginBottom: "1.1428571em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.5714286em";
          marginBottom: "0.5714286em";
        };
        dl: { marginTop: "1.1428571em"; marginBottom: "1.1428571em" };
        dt: { marginTop: "1.1428571em" };
        dd: { marginTop: "0.2857143em"; paddingInlineStart: "1.5714286em" };
        hr: { marginTop: "2.8571429em"; marginBottom: "2.8571429em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.8571429em"; lineHeight: "1.5" };
        "thead th": {
          paddingInlineEnd: "1em";
          paddingBottom: "0.6666667em";
          paddingInlineStart: "1em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.6666667em";
          paddingInlineEnd: "1em";
          paddingBottom: "0.6666667em";
          paddingInlineStart: "1em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "1.7142857em"; marginBottom: "1.7142857em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.8571429em";
          lineHeight: "1.3333333";
          marginTop: "0.6666667em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      }
    ];
  };
  export const _base: {
    css: [
      {
        fontSize: "1rem";
        lineHeight: "1.75";
        p: { marginTop: "1.25em"; marginBottom: "1.25em" };
        '[class~="lead"]': {
          fontSize: "1.25em";
          lineHeight: "1.6";
          marginTop: "1.2em";
          marginBottom: "1.2em";
        };
        blockquote: {
          marginTop: "1.6em";
          marginBottom: "1.6em";
          paddingInlineStart: "1em";
        };
        h1: {
          fontSize: "2.25em";
          marginTop: "0";
          marginBottom: "0.8888889em";
          lineHeight: "1.1111111";
        };
        h2: {
          fontSize: "1.5em";
          marginTop: "2em";
          marginBottom: "1em";
          lineHeight: "1.3333333";
        };
        h3: {
          fontSize: "1.25em";
          marginTop: "1.6em";
          marginBottom: "0.6em";
          lineHeight: "1.6";
        };
        h4: { marginTop: "1.5em"; marginBottom: "0.5em"; lineHeight: "1.5" };
        img: { marginTop: "2em"; marginBottom: "2em" };
        picture: { marginTop: "2em"; marginBottom: "2em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "2em"; marginBottom: "2em" };
        kbd: {
          fontSize: "0.875em";
          borderRadius: "0.3125rem";
          paddingTop: "0.1875em";
          paddingInlineEnd: "0.375em";
          paddingBottom: "0.1875em";
          paddingInlineStart: "0.375em";
        };
        code: { fontSize: "0.875em" };
        "h2 code": { fontSize: "0.875em" };
        "h3 code": { fontSize: "0.9em" };
        pre: {
          fontSize: "0.875em";
          lineHeight: "1.7142857";
          marginTop: "1.7142857em";
          marginBottom: "1.7142857em";
          borderRadius: "0.375rem";
          paddingTop: "0.8571429em";
          paddingInlineEnd: "1.1428571em";
          paddingBottom: "0.8571429em";
          paddingInlineStart: "1.1428571em";
        };
        ol: {
          marginTop: "1.25em";
          marginBottom: "1.25em";
          paddingInlineStart: "1.625em";
        };
        ul: {
          marginTop: "1.25em";
          marginBottom: "1.25em";
          paddingInlineStart: "1.625em";
        };
        li: { marginTop: "0.5em"; marginBottom: "0.5em" };
        "ol > li": { paddingInlineStart: "0.375em" };
        "ul > li": { paddingInlineStart: "0.375em" };
        "> ul > li p": { marginTop: "0.75em"; marginBottom: "0.75em" };
        "> ul > li > *:first-child": { marginTop: "1.25em" };
        "> ul > li > *:last-child": { marginBottom: "1.25em" };
        "> ol > li > *:first-child": { marginTop: "1.25em" };
        "> ol > li > *:last-child": { marginBottom: "1.25em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.75em";
          marginBottom: "0.75em";
        };
        dl: { marginTop: "1.25em"; marginBottom: "1.25em" };
        dt: { marginTop: "1.25em" };
        dd: { marginTop: "0.5em"; paddingInlineStart: "1.625em" };
        hr: { marginTop: "3em"; marginBottom: "3em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.875em"; lineHeight: "1.7142857" };
        "thead th": {
          paddingInlineEnd: "0.5714286em";
          paddingBottom: "0.5714286em";
          paddingInlineStart: "0.5714286em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.5714286em";
          paddingInlineEnd: "0.5714286em";
          paddingBottom: "0.5714286em";
          paddingInlineStart: "0.5714286em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "2em"; marginBottom: "2em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.875em";
          lineHeight: "1.4285714";
          marginTop: "0.8571429em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      }
    ];
  };
  export const _lg: {
    css: [
      {
        fontSize: "1.125rem";
        lineHeight: "1.7777778";
        p: { marginTop: "1.3333333em"; marginBottom: "1.3333333em" };
        '[class~="lead"]': {
          fontSize: "1.2222222em";
          lineHeight: "1.4545455";
          marginTop: "1.0909091em";
          marginBottom: "1.0909091em";
        };
        blockquote: {
          marginTop: "1.6666667em";
          marginBottom: "1.6666667em";
          paddingInlineStart: "1em";
        };
        h1: {
          fontSize: "2.6666667em";
          marginTop: "0";
          marginBottom: "0.8333333em";
          lineHeight: "1";
        };
        h2: {
          fontSize: "1.6666667em";
          marginTop: "1.8666667em";
          marginBottom: "1.0666667em";
          lineHeight: "1.3333333";
        };
        h3: {
          fontSize: "1.3333333em";
          marginTop: "1.6666667em";
          marginBottom: "0.6666667em";
          lineHeight: "1.5";
        };
        h4: {
          marginTop: "1.7777778em";
          marginBottom: "0.4444444em";
          lineHeight: "1.5555556";
        };
        img: { marginTop: "1.7777778em"; marginBottom: "1.7777778em" };
        picture: { marginTop: "1.7777778em"; marginBottom: "1.7777778em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "1.7777778em"; marginBottom: "1.7777778em" };
        kbd: {
          fontSize: "0.8888889em";
          borderRadius: "0.3125rem";
          paddingTop: "0.2222222em";
          paddingInlineEnd: "0.4444444em";
          paddingBottom: "0.2222222em";
          paddingInlineStart: "0.4444444em";
        };
        code: { fontSize: "0.8888889em" };
        "h2 code": { fontSize: "0.8666667em" };
        "h3 code": { fontSize: "0.875em" };
        pre: {
          fontSize: "0.8888889em";
          lineHeight: "1.75";
          marginTop: "2em";
          marginBottom: "2em";
          borderRadius: "0.375rem";
          paddingTop: "1em";
          paddingInlineEnd: "1.5em";
          paddingBottom: "1em";
          paddingInlineStart: "1.5em";
        };
        ol: {
          marginTop: "1.3333333em";
          marginBottom: "1.3333333em";
          paddingInlineStart: "1.5555556em";
        };
        ul: {
          marginTop: "1.3333333em";
          marginBottom: "1.3333333em";
          paddingInlineStart: "1.5555556em";
        };
        li: { marginTop: "0.6666667em"; marginBottom: "0.6666667em" };
        "ol > li": { paddingInlineStart: "0.4444444em" };
        "ul > li": { paddingInlineStart: "0.4444444em" };
        "> ul > li p": {
          marginTop: "0.8888889em";
          marginBottom: "0.8888889em";
        };
        "> ul > li > *:first-child": { marginTop: "1.3333333em" };
        "> ul > li > *:last-child": { marginBottom: "1.3333333em" };
        "> ol > li > *:first-child": { marginTop: "1.3333333em" };
        "> ol > li > *:last-child": { marginBottom: "1.3333333em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.8888889em";
          marginBottom: "0.8888889em";
        };
        dl: { marginTop: "1.3333333em"; marginBottom: "1.3333333em" };
        dt: { marginTop: "1.3333333em" };
        dd: { marginTop: "0.6666667em"; paddingInlineStart: "1.5555556em" };
        hr: { marginTop: "3.1111111em"; marginBottom: "3.1111111em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.8888889em"; lineHeight: "1.5" };
        "thead th": {
          paddingInlineEnd: "0.75em";
          paddingBottom: "0.75em";
          paddingInlineStart: "0.75em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.75em";
          paddingInlineEnd: "0.75em";
          paddingBottom: "0.75em";
          paddingInlineStart: "0.75em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "1.7777778em"; marginBottom: "1.7777778em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.8888889em";
          lineHeight: "1.5";
          marginTop: "1em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      }
    ];
  };
  export const _xl: {
    css: [
      {
        fontSize: "1.25rem";
        lineHeight: "1.8";
        p: { marginTop: "1.2em"; marginBottom: "1.2em" };
        '[class~="lead"]': {
          fontSize: "1.2em";
          lineHeight: "1.5";
          marginTop: "1em";
          marginBottom: "1em";
        };
        blockquote: {
          marginTop: "1.6em";
          marginBottom: "1.6em";
          paddingInlineStart: "1.0666667em";
        };
        h1: {
          fontSize: "2.8em";
          marginTop: "0";
          marginBottom: "0.8571429em";
          lineHeight: "1";
        };
        h2: {
          fontSize: "1.8em";
          marginTop: "1.5555556em";
          marginBottom: "0.8888889em";
          lineHeight: "1.1111111";
        };
        h3: {
          fontSize: "1.5em";
          marginTop: "1.6em";
          marginBottom: "0.6666667em";
          lineHeight: "1.3333333";
        };
        h4: { marginTop: "1.8em"; marginBottom: "0.6em"; lineHeight: "1.6" };
        img: { marginTop: "2em"; marginBottom: "2em" };
        picture: { marginTop: "2em"; marginBottom: "2em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "2em"; marginBottom: "2em" };
        kbd: {
          fontSize: "0.9em";
          borderRadius: "0.3125rem";
          paddingTop: "0.25em";
          paddingInlineEnd: "0.4em";
          paddingBottom: "0.25em";
          paddingInlineStart: "0.4em";
        };
        code: { fontSize: "0.9em" };
        "h2 code": { fontSize: "0.8611111em" };
        "h3 code": { fontSize: "0.9em" };
        pre: {
          fontSize: "0.9em";
          lineHeight: "1.7777778";
          marginTop: "2em";
          marginBottom: "2em";
          borderRadius: "0.5rem";
          paddingTop: "1.1111111em";
          paddingInlineEnd: "1.3333333em";
          paddingBottom: "1.1111111em";
          paddingInlineStart: "1.3333333em";
        };
        ol: {
          marginTop: "1.2em";
          marginBottom: "1.2em";
          paddingInlineStart: "1.6em";
        };
        ul: {
          marginTop: "1.2em";
          marginBottom: "1.2em";
          paddingInlineStart: "1.6em";
        };
        li: { marginTop: "0.6em"; marginBottom: "0.6em" };
        "ol > li": { paddingInlineStart: "0.4em" };
        "ul > li": { paddingInlineStart: "0.4em" };
        "> ul > li p": { marginTop: "0.8em"; marginBottom: "0.8em" };
        "> ul > li > *:first-child": { marginTop: "1.2em" };
        "> ul > li > *:last-child": { marginBottom: "1.2em" };
        "> ol > li > *:first-child": { marginTop: "1.2em" };
        "> ol > li > *:last-child": { marginBottom: "1.2em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.8em";
          marginBottom: "0.8em";
        };
        dl: { marginTop: "1.2em"; marginBottom: "1.2em" };
        dt: { marginTop: "1.2em" };
        dd: { marginTop: "0.6em"; paddingInlineStart: "1.6em" };
        hr: { marginTop: "2.8em"; marginBottom: "2.8em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.9em"; lineHeight: "1.5555556" };
        "thead th": {
          paddingInlineEnd: "0.6666667em";
          paddingBottom: "0.8888889em";
          paddingInlineStart: "0.6666667em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.8888889em";
          paddingInlineEnd: "0.6666667em";
          paddingBottom: "0.8888889em";
          paddingInlineStart: "0.6666667em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "2em"; marginBottom: "2em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.9em";
          lineHeight: "1.5555556";
          marginTop: "1em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      }
    ];
  };
  export const _2xl: {
    css: [
      {
        fontSize: "1.5rem";
        lineHeight: "1.6666667";
        p: { marginTop: "1.3333333em"; marginBottom: "1.3333333em" };
        '[class~="lead"]': {
          fontSize: "1.25em";
          lineHeight: "1.4666667";
          marginTop: "1.0666667em";
          marginBottom: "1.0666667em";
        };
        blockquote: {
          marginTop: "1.7777778em";
          marginBottom: "1.7777778em";
          paddingInlineStart: "1.1111111em";
        };
        h1: {
          fontSize: "2.6666667em";
          marginTop: "0";
          marginBottom: "0.875em";
          lineHeight: "1";
        };
        h2: {
          fontSize: "2em";
          marginTop: "1.5em";
          marginBottom: "0.8333333em";
          lineHeight: "1.0833333";
        };
        h3: {
          fontSize: "1.5em";
          marginTop: "1.5555556em";
          marginBottom: "0.6666667em";
          lineHeight: "1.2222222";
        };
        h4: {
          marginTop: "1.6666667em";
          marginBottom: "0.6666667em";
          lineHeight: "1.5";
        };
        img: { marginTop: "2em"; marginBottom: "2em" };
        picture: { marginTop: "2em"; marginBottom: "2em" };
        "picture > img": { marginTop: "0"; marginBottom: "0" };
        video: { marginTop: "2em"; marginBottom: "2em" };
        kbd: {
          fontSize: "0.8333333em";
          borderRadius: "0.375rem";
          paddingTop: "0.25em";
          paddingInlineEnd: "0.3333333em";
          paddingBottom: "0.25em";
          paddingInlineStart: "0.3333333em";
        };
        code: { fontSize: "0.8333333em" };
        "h2 code": { fontSize: "0.875em" };
        "h3 code": { fontSize: "0.8888889em" };
        pre: {
          fontSize: "0.8333333em";
          lineHeight: "1.8";
          marginTop: "2em";
          marginBottom: "2em";
          borderRadius: "0.5rem";
          paddingTop: "1.2em";
          paddingInlineEnd: "1.6em";
          paddingBottom: "1.2em";
          paddingInlineStart: "1.6em";
        };
        ol: {
          marginTop: "1.3333333em";
          marginBottom: "1.3333333em";
          paddingInlineStart: "1.5833333em";
        };
        ul: {
          marginTop: "1.3333333em";
          marginBottom: "1.3333333em";
          paddingInlineStart: "1.5833333em";
        };
        li: { marginTop: "0.5em"; marginBottom: "0.5em" };
        "ol > li": { paddingInlineStart: "0.4166667em" };
        "ul > li": { paddingInlineStart: "0.4166667em" };
        "> ul > li p": {
          marginTop: "0.8333333em";
          marginBottom: "0.8333333em";
        };
        "> ul > li > *:first-child": { marginTop: "1.3333333em" };
        "> ul > li > *:last-child": { marginBottom: "1.3333333em" };
        "> ol > li > *:first-child": { marginTop: "1.3333333em" };
        "> ol > li > *:last-child": { marginBottom: "1.3333333em" };
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: "0.6666667em";
          marginBottom: "0.6666667em";
        };
        dl: { marginTop: "1.3333333em"; marginBottom: "1.3333333em" };
        dt: { marginTop: "1.3333333em" };
        dd: { marginTop: "0.5em"; paddingInlineStart: "1.5833333em" };
        hr: { marginTop: "3em"; marginBottom: "3em" };
        "hr + *": { marginTop: "0" };
        "h2 + *": { marginTop: "0" };
        "h3 + *": { marginTop: "0" };
        "h4 + *": { marginTop: "0" };
        table: { fontSize: "0.8333333em"; lineHeight: "1.4" };
        "thead th": {
          paddingInlineEnd: "0.6em";
          paddingBottom: "0.8em";
          paddingInlineStart: "0.6em";
        };
        "thead th:first-child": { paddingInlineStart: "0" };
        "thead th:last-child": { paddingInlineEnd: "0" };
        "tbody td, tfoot td": {
          paddingTop: "0.8em";
          paddingInlineEnd: "0.6em";
          paddingBottom: "0.8em";
          paddingInlineStart: "0.6em";
        };
        "tbody td:first-child, tfoot td:first-child": {
          paddingInlineStart: "0";
        };
        "tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" };
        figure: { marginTop: "2em"; marginBottom: "2em" };
        "figure > *": { marginTop: "0"; marginBottom: "0" };
        figcaption: {
          fontSize: "0.8333333em";
          lineHeight: "1.6";
          marginTop: "1em";
        };
      },
      {
        "> :first-child": { marginTop: "0" };
        "> :last-child": { marginBottom: "0" };
      }
    ];
  };
  export const _slate: {
    css: {
      "--tw-prose-body": "#334155";
      "--tw-prose-headings": "#0f172a";
      "--tw-prose-lead": "#475569";
      "--tw-prose-links": "#0f172a";
      "--tw-prose-bold": "#0f172a";
      "--tw-prose-counters": "#64748b";
      "--tw-prose-bullets": "#cbd5e1";
      "--tw-prose-hr": "#e2e8f0";
      "--tw-prose-quotes": "#0f172a";
      "--tw-prose-quote-borders": "#e2e8f0";
      "--tw-prose-captions": "#64748b";
      "--tw-prose-kbd": "#0f172a";
      "--tw-prose-kbd-shadows": "15 23 42";
      "--tw-prose-code": "#0f172a";
      "--tw-prose-pre-code": "#e2e8f0";
      "--tw-prose-pre-bg": "#1e293b";
      "--tw-prose-th-borders": "#cbd5e1";
      "--tw-prose-td-borders": "#e2e8f0";
      "--tw-prose-invert-body": "#cbd5e1";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "#94a3b8";
      "--tw-prose-invert-links": "#fff";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "#94a3b8";
      "--tw-prose-invert-bullets": "#475569";
      "--tw-prose-invert-hr": "#334155";
      "--tw-prose-invert-quotes": "#f1f5f9";
      "--tw-prose-invert-quote-borders": "#334155";
      "--tw-prose-invert-captions": "#94a3b8";
      "--tw-prose-invert-kbd": "#fff";
      "--tw-prose-invert-kbd-shadows": "255 255 255";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#cbd5e1";
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
      "--tw-prose-invert-th-borders": "#475569";
      "--tw-prose-invert-td-borders": "#334155";
    };
  };
  export const _gray: {
    css: {
      "--tw-prose-body": "#374151";
      "--tw-prose-headings": "#111827";
      "--tw-prose-lead": "#4b5563";
      "--tw-prose-links": "#111827";
      "--tw-prose-bold": "#111827";
      "--tw-prose-counters": "#6b7280";
      "--tw-prose-bullets": "#d1d5db";
      "--tw-prose-hr": "#e5e7eb";
      "--tw-prose-quotes": "#111827";
      "--tw-prose-quote-borders": "#e5e7eb";
      "--tw-prose-captions": "#6b7280";
      "--tw-prose-kbd": "#111827";
      "--tw-prose-kbd-shadows": "17 24 39";
      "--tw-prose-code": "#111827";
      "--tw-prose-pre-code": "#e5e7eb";
      "--tw-prose-pre-bg": "#1f2937";
      "--tw-prose-th-borders": "#d1d5db";
      "--tw-prose-td-borders": "#e5e7eb";
      "--tw-prose-invert-body": "#d1d5db";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "#9ca3af";
      "--tw-prose-invert-links": "#fff";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "#9ca3af";
      "--tw-prose-invert-bullets": "#4b5563";
      "--tw-prose-invert-hr": "#374151";
      "--tw-prose-invert-quotes": "#f3f4f6";
      "--tw-prose-invert-quote-borders": "#374151";
      "--tw-prose-invert-captions": "#9ca3af";
      "--tw-prose-invert-kbd": "#fff";
      "--tw-prose-invert-kbd-shadows": "255 255 255";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#d1d5db";
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
      "--tw-prose-invert-th-borders": "#4b5563";
      "--tw-prose-invert-td-borders": "#374151";
    };
  };
  export const _zinc: {
    css: {
      "--tw-prose-body": "#3f3f46";
      "--tw-prose-headings": "#18181b";
      "--tw-prose-lead": "#52525b";
      "--tw-prose-links": "#18181b";
      "--tw-prose-bold": "#18181b";
      "--tw-prose-counters": "#71717a";
      "--tw-prose-bullets": "#d4d4d8";
      "--tw-prose-hr": "#e4e4e7";
      "--tw-prose-quotes": "#18181b";
      "--tw-prose-quote-borders": "#e4e4e7";
      "--tw-prose-captions": "#71717a";
      "--tw-prose-kbd": "#18181b";
      "--tw-prose-kbd-shadows": "24 24 27";
      "--tw-prose-code": "#18181b";
      "--tw-prose-pre-code": "#e4e4e7";
      "--tw-prose-pre-bg": "#27272a";
      "--tw-prose-th-borders": "#d4d4d8";
      "--tw-prose-td-borders": "#e4e4e7";
      "--tw-prose-invert-body": "#d4d4d8";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "#a1a1aa";
      "--tw-prose-invert-links": "#fff";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "#a1a1aa";
      "--tw-prose-invert-bullets": "#52525b";
      "--tw-prose-invert-hr": "#3f3f46";
      "--tw-prose-invert-quotes": "#f4f4f5";
      "--tw-prose-invert-quote-borders": "#3f3f46";
      "--tw-prose-invert-captions": "#a1a1aa";
      "--tw-prose-invert-kbd": "#fff";
      "--tw-prose-invert-kbd-shadows": "255 255 255";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#d4d4d8";
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
      "--tw-prose-invert-th-borders": "#52525b";
      "--tw-prose-invert-td-borders": "#3f3f46";
    };
  };
  export const _neutral: {
    css: {
      "--tw-prose-body": "#404040";
      "--tw-prose-headings": "#171717";
      "--tw-prose-lead": "#525252";
      "--tw-prose-links": "#171717";
      "--tw-prose-bold": "#171717";
      "--tw-prose-counters": "#737373";
      "--tw-prose-bullets": "#d4d4d4";
      "--tw-prose-hr": "#e5e5e5";
      "--tw-prose-quotes": "#171717";
      "--tw-prose-quote-borders": "#e5e5e5";
      "--tw-prose-captions": "#737373";
      "--tw-prose-kbd": "#171717";
      "--tw-prose-kbd-shadows": "23 23 23";
      "--tw-prose-code": "#171717";
      "--tw-prose-pre-code": "#e5e5e5";
      "--tw-prose-pre-bg": "#262626";
      "--tw-prose-th-borders": "#d4d4d4";
      "--tw-prose-td-borders": "#e5e5e5";
      "--tw-prose-invert-body": "#d4d4d4";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "#a3a3a3";
      "--tw-prose-invert-links": "#fff";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "#a3a3a3";
      "--tw-prose-invert-bullets": "#525252";
      "--tw-prose-invert-hr": "#404040";
      "--tw-prose-invert-quotes": "#f5f5f5";
      "--tw-prose-invert-quote-borders": "#404040";
      "--tw-prose-invert-captions": "#a3a3a3";
      "--tw-prose-invert-kbd": "#fff";
      "--tw-prose-invert-kbd-shadows": "255 255 255";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#d4d4d4";
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
      "--tw-prose-invert-th-borders": "#525252";
      "--tw-prose-invert-td-borders": "#404040";
    };
  };
  export const _stone: {
    css: {
      "--tw-prose-body": "#44403c";
      "--tw-prose-headings": "#1c1917";
      "--tw-prose-lead": "#57534e";
      "--tw-prose-links": "#1c1917";
      "--tw-prose-bold": "#1c1917";
      "--tw-prose-counters": "#78716c";
      "--tw-prose-bullets": "#d6d3d1";
      "--tw-prose-hr": "#e7e5e4";
      "--tw-prose-quotes": "#1c1917";
      "--tw-prose-quote-borders": "#e7e5e4";
      "--tw-prose-captions": "#78716c";
      "--tw-prose-kbd": "#1c1917";
      "--tw-prose-kbd-shadows": "28 25 23";
      "--tw-prose-code": "#1c1917";
      "--tw-prose-pre-code": "#e7e5e4";
      "--tw-prose-pre-bg": "#292524";
      "--tw-prose-th-borders": "#d6d3d1";
      "--tw-prose-td-borders": "#e7e5e4";
      "--tw-prose-invert-body": "#d6d3d1";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "#a8a29e";
      "--tw-prose-invert-links": "#fff";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "#a8a29e";
      "--tw-prose-invert-bullets": "#57534e";
      "--tw-prose-invert-hr": "#44403c";
      "--tw-prose-invert-quotes": "#f5f5f4";
      "--tw-prose-invert-quote-borders": "#44403c";
      "--tw-prose-invert-captions": "#a8a29e";
      "--tw-prose-invert-kbd": "#fff";
      "--tw-prose-invert-kbd-shadows": "255 255 255";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#d6d3d1";
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)";
      "--tw-prose-invert-th-borders": "#57534e";
      "--tw-prose-invert-td-borders": "#44403c";
    };
  };
  export const _red: {
    css: {
      "--tw-prose-links": "#dc2626";
      "--tw-prose-invert-links": "#ef4444";
    };
  };
  export const _orange: {
    css: {
      "--tw-prose-links": "#ea580c";
      "--tw-prose-invert-links": "#f97316";
    };
  };
  export const _amber: {
    css: {
      "--tw-prose-links": "#d97706";
      "--tw-prose-invert-links": "#f59e0b";
    };
  };
  export const _yellow: {
    css: {
      "--tw-prose-links": "#ca8a04";
      "--tw-prose-invert-links": "#eab308";
    };
  };
  export const _lime: {
    css: {
      "--tw-prose-links": "#65a30d";
      "--tw-prose-invert-links": "#84cc16";
    };
  };
  export const _green: {
    css: {
      "--tw-prose-links": "#16a34a";
      "--tw-prose-invert-links": "#22c55e";
    };
  };
  export const _emerald: {
    css: {
      "--tw-prose-links": "#059669";
      "--tw-prose-invert-links": "#10b981";
    };
  };
  export const _teal: {
    css: {
      "--tw-prose-links": "#0d9488";
      "--tw-prose-invert-links": "#14b8a6";
    };
  };
  export const _cyan: {
    css: {
      "--tw-prose-links": "#0891b2";
      "--tw-prose-invert-links": "#06b6d4";
    };
  };
  export const _sky: {
    css: {
      "--tw-prose-links": "#0284c7";
      "--tw-prose-invert-links": "#0ea5e9";
    };
  };
  export const _blue: {
    css: {
      "--tw-prose-links": "#2563eb";
      "--tw-prose-invert-links": "#3b82f6";
    };
  };
  export const _indigo: {
    css: {
      "--tw-prose-links": "#4f46e5";
      "--tw-prose-invert-links": "#6366f1";
    };
  };
  export const _violet: {
    css: {
      "--tw-prose-links": "#7c3aed";
      "--tw-prose-invert-links": "#8b5cf6";
    };
  };
  export const _purple: {
    css: {
      "--tw-prose-links": "#9333ea";
      "--tw-prose-invert-links": "#a855f7";
    };
  };
  export const _fuchsia: {
    css: {
      "--tw-prose-links": "#c026d3";
      "--tw-prose-invert-links": "#d946ef";
    };
  };
  export const _pink: {
    css: {
      "--tw-prose-links": "#db2777";
      "--tw-prose-invert-links": "#ec4899";
    };
  };
  export const _rose: {
    css: {
      "--tw-prose-links": "#e11d48";
      "--tw-prose-invert-links": "#f43f5e";
    };
  };
  export const _invert: {
    css: {
      "--tw-prose-body": "var(--tw-prose-invert-body)";
      "--tw-prose-headings": "var(--tw-prose-invert-headings)";
      "--tw-prose-lead": "var(--tw-prose-invert-lead)";
      "--tw-prose-links": "var(--tw-prose-invert-links)";
      "--tw-prose-bold": "var(--tw-prose-invert-bold)";
      "--tw-prose-counters": "var(--tw-prose-invert-counters)";
      "--tw-prose-bullets": "var(--tw-prose-invert-bullets)";
      "--tw-prose-hr": "var(--tw-prose-invert-hr)";
      "--tw-prose-quotes": "var(--tw-prose-invert-quotes)";
      "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)";
      "--tw-prose-captions": "var(--tw-prose-invert-captions)";
      "--tw-prose-kbd": "var(--tw-prose-invert-kbd)";
      "--tw-prose-kbd-shadows": "var(--tw-prose-invert-kbd-shadows)";
      "--tw-prose-code": "var(--tw-prose-invert-code)";
      "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)";
      "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)";
      "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)";
      "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)";
      "--tw-prose-pre-border": "var(--tw-prose-invert-pre-border)";
      'input[type="checkbox"]': {
        backgroundColor: "rgb(var(--color-gray-800))";
        borderColor: "rgb(var(--color-gray-700))";
      };
      'input[type="checkbox"]:checked': {
        backgroundColor: "rgb(var(--color-primary-400))";
        borderColor: "rgb(var(--color-primary-400))";
      };
    };
  };
  export const _primary: {
    css: {
      "--tw-prose-body": "rgb(var(--color-gray-700))";
      "--tw-prose-headings": "rgb(var(--color-gray-900))";
      "--tw-prose-lead": "rgb(var(--color-gray-600))";
      "--tw-prose-links": "rgb(var(--color-primary-500))";
      "--tw-prose-bold": "rgb(var(--color-gray-900))";
      "--tw-prose-counters": "rgb(var(--color-gray-500))";
      "--tw-prose-bullets": "rgb(var(--color-gray-300))";
      "--tw-prose-hr": "rgb(var(--color-gray-200))";
      "--tw-prose-quotes": "rgb(var(--color-gray-900))";
      "--tw-prose-quote-borders": "rgb(var(--color-gray-200))";
      "--tw-prose-captions": "rgb(var(--color-gray-500))";
      "--tw-prose-code": "rgb(var(--color-gray-900))";
      "--tw-prose-pre-code": "rgb(var(--color-gray-900))";
      "--tw-prose-pre-bg": "rgb(var(--color-gray-50))";
      "--tw-prose-pre-border": "rgb(var(--color-gray-200))";
      "--tw-prose-th-borders": "rgb(var(--color-gray-300))";
      "--tw-prose-td-borders": "rgb(var(--color-gray-200))";
      "--tw-prose-invert-body": "rgb(var(--color-gray-200))";
      "--tw-prose-invert-headings": "#fff";
      "--tw-prose-invert-lead": "rgb(var(--color-gray-400))";
      "--tw-prose-invert-links": "rgb(var(--color-primary-400))";
      "--tw-prose-invert-bold": "#fff";
      "--tw-prose-invert-counters": "rgb(var(--color-gray-400))";
      "--tw-prose-invert-bullets": "rgb(var(--color-gray-600))";
      "--tw-prose-invert-hr": "rgb(var(--color-gray-800))";
      "--tw-prose-invert-quotes": "rgb(var(--color-gray-100))";
      "--tw-prose-invert-quote-borders": "rgb(var(--color-gray-700))";
      "--tw-prose-invert-captions": "rgb(var(--color-gray-400))";
      "--tw-prose-invert-code": "#fff";
      "--tw-prose-invert-pre-code": "#fff";
      "--tw-prose-invert-pre-bg": "rgb(var(--color-gray-800))";
      "--tw-prose-invert-pre-border": "rgb(var(--color-gray-700))";
      "--tw-prose-invert-th-borders": "rgb(var(--color-gray-700))";
      "--tw-prose-invert-td-borders": "rgb(var(--color-gray-800))";
    };
  };
  const defaultExport: {
    DEFAULT: typeof _DEFAULT;
    sm: typeof _sm;
    base: typeof _base;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    invert: typeof _invert;
    primary: typeof _primary;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/containers" {
  export const _xs: "20rem";
  export const _sm: "24rem";
  export const _md: "28rem";
  export const _lg: "32rem";
  export const _xl: "36rem";
  export const _2xl: "42rem";
  export const _3xl: "48rem";
  export const _4xl: "56rem";
  export const _5xl: "64rem";
  export const _6xl: "72rem";
  export const _7xl: "80rem";
  const defaultExport: {
    xs: typeof _xs;
    sm: typeof _sm;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
    "4xl": typeof _4xl;
    "5xl": typeof _5xl;
    "6xl": typeof _6xl;
    "7xl": typeof _7xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/accentColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  export const _auto: "auto";
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/animation" {
  export const _none: "none";
  export const _spin: "spin 1s linear infinite";
  export const _ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite";
  export const _pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
  export const _bounce: "bounce 1s infinite";
  const defaultExport: {
    none: typeof _none;
    spin: typeof _spin;
    ping: typeof _ping;
    pulse: typeof _pulse;
    bounce: typeof _bounce;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/aria" {
  export const _busy: 'busy="true"';
  export const _checked: 'checked="true"';
  export const _disabled: 'disabled="true"';
  export const _expanded: 'expanded="true"';
  export const _hidden: 'hidden="true"';
  export const _pressed: 'pressed="true"';
  export const _readonly: 'readonly="true"';
  export const _required: 'required="true"';
  export const _selected: 'selected="true"';
  const defaultExport: {
    busy: typeof _busy;
    checked: typeof _checked;
    disabled: typeof _disabled;
    expanded: typeof _expanded;
    hidden: typeof _hidden;
    pressed: typeof _pressed;
    readonly: typeof _readonly;
    required: typeof _required;
    selected: typeof _selected;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropBlur" {
  export const _0: "0";
  export const _none: "0";
  export const _sm: "4px";
  export const _DEFAULT: "8px";
  export const _md: "12px";
  export const _lg: "16px";
  export const _xl: "24px";
  export const _2xl: "40px";
  export const _3xl: "64px";
  const defaultExport: {
    "0": typeof _0;
    none: typeof _none;
    sm: typeof _sm;
    DEFAULT: typeof _DEFAULT;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropBrightness" {
  export const _0: "0";
  export const _50: ".5";
  export const _75: ".75";
  export const _90: ".9";
  export const _95: ".95";
  export const _100: "1";
  export const _105: "1.05";
  export const _110: "1.1";
  export const _125: "1.25";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "75": typeof _75;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
    "105": typeof _105;
    "110": typeof _110;
    "125": typeof _125;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropContrast" {
  export const _0: "0";
  export const _50: ".5";
  export const _75: ".75";
  export const _100: "1";
  export const _125: "1.25";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "75": typeof _75;
    "100": typeof _100;
    "125": typeof _125;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropGrayscale" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropHueRotate" {
  export const _0: "0deg";
  export const _15: "15deg";
  export const _30: "30deg";
  export const _60: "60deg";
  export const _90: "90deg";
  export const _180: "180deg";
  const defaultExport: {
    "0": typeof _0;
    "15": typeof _15;
    "30": typeof _30;
    "60": typeof _60;
    "90": typeof _90;
    "180": typeof _180;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropInvert" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropSaturate" {
  export const _0: "0";
  export const _50: ".5";
  export const _100: "1";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "100": typeof _100;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backdropSepia" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backgroundColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backgroundImage" {
  export const _none: "none";
  const defaultExport: {
    none: typeof _none;
    "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))";
    "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))";
    "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))";
    "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))";
    "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))";
    "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))";
    "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))";
    "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backgroundOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backgroundPosition" {
  export const _bottom: "bottom";
  export const _center: "center";
  export const _left: "left";
  export const _right: "right";
  export const _top: "top";
  const defaultExport: {
    bottom: typeof _bottom;
    center: typeof _center;
    left: typeof _left;
    right: typeof _right;
    top: typeof _top;
    "left-bottom": "left bottom";
    "left-top": "left top";
    "right-bottom": "right bottom";
    "right-top": "right top";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/backgroundSize" {
  export const _auto: "auto";
  export const _cover: "cover";
  export const _contain: "contain";
  const defaultExport: {
    auto: typeof _auto;
    cover: typeof _cover;
    contain: typeof _contain;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/blur" {
  export const _0: "0";
  export const _none: "0";
  export const _sm: "4px";
  export const _DEFAULT: "8px";
  export const _md: "12px";
  export const _lg: "16px";
  export const _xl: "24px";
  export const _2xl: "40px";
  export const _3xl: "64px";
  const defaultExport: {
    "0": typeof _0;
    none: typeof _none;
    sm: typeof _sm;
    DEFAULT: typeof _DEFAULT;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/borderColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  export const _DEFAULT: "rgb(var(--color-gray-200) / <alpha-value>)";
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/borderOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/borderRadius" {
  export const _none: "0px";
  export const _sm: "0.125rem";
  export const _DEFAULT: "0.25rem";
  export const _md: "0.375rem";
  export const _lg: "0.5rem";
  export const _xl: "0.75rem";
  export const _2xl: "1rem";
  export const _3xl: "1.5rem";
  export const _full: "9999px";
  const defaultExport: {
    none: typeof _none;
    sm: typeof _sm;
    DEFAULT: typeof _DEFAULT;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
    full: typeof _full;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/borderSpacing" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/borderWidth" {
  export const _0: "0px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  export const _DEFAULT: "1px";
  const defaultExport: {
    "0": typeof _0;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/boxShadow" {
  export const _sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
  export const _DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
  export const _md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
  export const _lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
  export const _xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
  export const _2xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)";
  export const _inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
  export const _none: "none";
  const defaultExport: {
    sm: typeof _sm;
    DEFAULT: typeof _DEFAULT;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    inner: typeof _inner;
    none: typeof _none;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/boxShadowColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/brightness" {
  export const _0: "0";
  export const _50: ".5";
  export const _75: ".75";
  export const _90: ".9";
  export const _95: ".95";
  export const _100: "1";
  export const _105: "1.05";
  export const _110: "1.1";
  export const _125: "1.25";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "75": typeof _75;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
    "105": typeof _105;
    "110": typeof _110;
    "125": typeof _125;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/caretColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/colors" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/columns" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _auto: "auto";
  export const _3xs: "16rem";
  export const _2xs: "18rem";
  export const _xs: "20rem";
  export const _sm: "24rem";
  export const _md: "28rem";
  export const _lg: "32rem";
  export const _xl: "36rem";
  export const _2xl: "42rem";
  export const _3xl: "48rem";
  export const _4xl: "56rem";
  export const _5xl: "64rem";
  export const _6xl: "72rem";
  export const _7xl: "80rem";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    auto: typeof _auto;
    "3xs": typeof _3xs;
    "2xs": typeof _2xs;
    xs: typeof _xs;
    sm: typeof _sm;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
    "4xl": typeof _4xl;
    "5xl": typeof _5xl;
    "6xl": typeof _6xl;
    "7xl": typeof _7xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/container" {
  const defaultExport: {};
  export default defaultExport;
}
declare module "#tailwind-config/theme/content" {
  export const _none: "none";
  const defaultExport: { none: typeof _none };
  export default defaultExport;
}
declare module "#tailwind-config/theme/contrast" {
  export const _0: "0";
  export const _50: ".5";
  export const _75: ".75";
  export const _100: "1";
  export const _125: "1.25";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "75": typeof _75;
    "100": typeof _100;
    "125": typeof _125;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/cursor" {
  export const _auto: "auto";
  export const _default: "default";
  export const _pointer: "pointer";
  export const _wait: "wait";
  export const _text: "text";
  export const _move: "move";
  export const _help: "help";
  export const _none: "none";
  export const _progress: "progress";
  export const _cell: "cell";
  export const _crosshair: "crosshair";
  export const _alias: "alias";
  export const _copy: "copy";
  export const _grab: "grab";
  export const _grabbing: "grabbing";
  const defaultExport: {
    auto: typeof _auto;
    default: typeof _default;
    pointer: typeof _pointer;
    wait: typeof _wait;
    text: typeof _text;
    move: typeof _move;
    help: typeof _help;
    none: typeof _none;
    progress: typeof _progress;
    cell: typeof _cell;
    crosshair: typeof _crosshair;
    alias: typeof _alias;
    copy: typeof _copy;
    grab: typeof _grab;
    grabbing: typeof _grabbing;
    "not-allowed": "not-allowed";
    "context-menu": "context-menu";
    "vertical-text": "vertical-text";
    "no-drop": "no-drop";
    "all-scroll": "all-scroll";
    "col-resize": "col-resize";
    "row-resize": "row-resize";
    "n-resize": "n-resize";
    "e-resize": "e-resize";
    "s-resize": "s-resize";
    "w-resize": "w-resize";
    "ne-resize": "ne-resize";
    "nw-resize": "nw-resize";
    "se-resize": "se-resize";
    "sw-resize": "sw-resize";
    "ew-resize": "ew-resize";
    "ns-resize": "ns-resize";
    "nesw-resize": "nesw-resize";
    "nwse-resize": "nwse-resize";
    "zoom-in": "zoom-in";
    "zoom-out": "zoom-out";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/divideColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  export const _DEFAULT: "rgb(var(--color-gray-200) / <alpha-value>)";
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/divideOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/divideWidth" {
  export const _0: "0px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  export const _DEFAULT: "1px";
  const defaultExport: {
    "0": typeof _0;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/dropShadow" {
  export const _sm: "0 1px 1px rgb(0 0 0 / 0.05)";
  export const _DEFAULT: [
    "0 1px 2px rgb(0 0 0 / 0.1)",
    "0 1px 1px rgb(0 0 0 / 0.06)"
  ];
  export const _md: [
    "0 4px 3px rgb(0 0 0 / 0.07)",
    "0 2px 2px rgb(0 0 0 / 0.06)"
  ];
  export const _lg: [
    "0 10px 8px rgb(0 0 0 / 0.04)",
    "0 4px 3px rgb(0 0 0 / 0.1)"
  ];
  export const _xl: [
    "0 20px 13px rgb(0 0 0 / 0.03)",
    "0 8px 5px rgb(0 0 0 / 0.08)"
  ];
  export const _2xl: "0 25px 25px rgb(0 0 0 / 0.15)";
  export const _none: "0 0 #0000";
  const defaultExport: {
    sm: typeof _sm;
    DEFAULT: typeof _DEFAULT;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    none: typeof _none;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/fill" {
  export const _none: "none";
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    none: typeof _none;
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/flex" {
  export const _1: "1 1 0%";
  export const _auto: "1 1 auto";
  export const _initial: "0 1 auto";
  export const _none: "none";
  const defaultExport: {
    "1": typeof _1;
    auto: typeof _auto;
    initial: typeof _initial;
    none: typeof _none;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/flexBasis" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  export const _full: "100%";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    full: typeof _full;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
    "1/5": "20%";
    "2/5": "40%";
    "3/5": "60%";
    "4/5": "80%";
    "1/6": "16.666667%";
    "2/6": "33.333333%";
    "3/6": "50%";
    "4/6": "66.666667%";
    "5/6": "83.333333%";
    "1/12": "8.333333%";
    "2/12": "16.666667%";
    "3/12": "25%";
    "4/12": "33.333333%";
    "5/12": "41.666667%";
    "6/12": "50%";
    "7/12": "58.333333%";
    "8/12": "66.666667%";
    "9/12": "75%";
    "10/12": "83.333333%";
    "11/12": "91.666667%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/flexGrow" {
  export const _0: "0";
  export const _DEFAULT: "1";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/flexShrink" {
  export const _0: "0";
  export const _DEFAULT: "1";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/fontFamily" {
  export const _sans: [
    "Inter var",
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ];
  export const _serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif"
  ];
  export const _mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace"
  ];
  const defaultExport: {
    sans: typeof _sans;
    serif: typeof _serif;
    mono: typeof _mono;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/fontSize" {
  export const _xs: ["0.75rem", { lineHeight: "1rem" }];
  export const _sm: ["0.875rem", { lineHeight: "1.25rem" }];
  export const _base: ["1rem", { lineHeight: "1.5rem" }];
  export const _lg: ["1.125rem", { lineHeight: "1.75rem" }];
  export const _xl: ["1.25rem", { lineHeight: "1.75rem" }];
  export const _2xl: ["1.5rem", { lineHeight: "2rem" }];
  export const _3xl: ["1.875rem", { lineHeight: "2.25rem" }];
  export const _4xl: ["2.25rem", { lineHeight: "2.5rem" }];
  export const _5xl: ["3rem", { lineHeight: "1" }];
  export const _6xl: ["3.75rem", { lineHeight: "1" }];
  export const _7xl: ["4.5rem", { lineHeight: "1" }];
  export const _8xl: ["6rem", { lineHeight: "1" }];
  export const _9xl: ["8rem", { lineHeight: "1" }];
  const defaultExport: {
    xs: typeof _xs;
    sm: typeof _sm;
    base: typeof _base;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
    "4xl": typeof _4xl;
    "5xl": typeof _5xl;
    "6xl": typeof _6xl;
    "7xl": typeof _7xl;
    "8xl": typeof _8xl;
    "9xl": typeof _9xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/fontWeight" {
  export const _thin: "100";
  export const _extralight: "200";
  export const _light: "300";
  export const _normal: "400";
  export const _medium: "500";
  export const _semibold: "600";
  export const _bold: "700";
  export const _extrabold: "800";
  export const _black: "900";
  const defaultExport: {
    thin: typeof _thin;
    extralight: typeof _extralight;
    light: typeof _light;
    normal: typeof _normal;
    medium: typeof _medium;
    semibold: typeof _semibold;
    bold: typeof _bold;
    extrabold: typeof _extrabold;
    black: typeof _black;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gap" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gradientColorStops" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gradientColorStopPositions" {
  const defaultExport: {
    "0%": "0%";
    "5%": "5%";
    "10%": "10%";
    "15%": "15%";
    "20%": "20%";
    "25%": "25%";
    "30%": "30%";
    "35%": "35%";
    "40%": "40%";
    "45%": "45%";
    "50%": "50%";
    "55%": "55%";
    "60%": "60%";
    "65%": "65%";
    "70%": "70%";
    "75%": "75%";
    "80%": "80%";
    "85%": "85%";
    "90%": "90%";
    "95%": "95%";
    "100%": "100%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/grayscale" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridAutoColumns" {
  export const _auto: "auto";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fr: "minmax(0, 1fr)";
  const defaultExport: {
    auto: typeof _auto;
    min: typeof _min;
    max: typeof _max;
    fr: typeof _fr;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridAutoRows" {
  export const _auto: "auto";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fr: "minmax(0, 1fr)";
  const defaultExport: {
    auto: typeof _auto;
    min: typeof _min;
    max: typeof _max;
    fr: typeof _fr;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridColumn" {
  export const _auto: "auto";
  const defaultExport: {
    auto: typeof _auto;
    "span-1": "span 1 / span 1";
    "span-2": "span 2 / span 2";
    "span-3": "span 3 / span 3";
    "span-4": "span 4 / span 4";
    "span-5": "span 5 / span 5";
    "span-6": "span 6 / span 6";
    "span-7": "span 7 / span 7";
    "span-8": "span 8 / span 8";
    "span-9": "span 9 / span 9";
    "span-10": "span 10 / span 10";
    "span-11": "span 11 / span 11";
    "span-12": "span 12 / span 12";
    "span-full": "1 / -1";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridColumnEnd" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _13: "13";
  export const _auto: "auto";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "13": typeof _13;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridColumnStart" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _13: "13";
  export const _auto: "auto";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "13": typeof _13;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridRow" {
  export const _auto: "auto";
  const defaultExport: {
    auto: typeof _auto;
    "span-1": "span 1 / span 1";
    "span-2": "span 2 / span 2";
    "span-3": "span 3 / span 3";
    "span-4": "span 4 / span 4";
    "span-5": "span 5 / span 5";
    "span-6": "span 6 / span 6";
    "span-7": "span 7 / span 7";
    "span-8": "span 8 / span 8";
    "span-9": "span 9 / span 9";
    "span-10": "span 10 / span 10";
    "span-11": "span 11 / span 11";
    "span-12": "span 12 / span 12";
    "span-full": "1 / -1";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridRowEnd" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _13: "13";
  export const _auto: "auto";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "13": typeof _13;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridRowStart" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _13: "13";
  export const _auto: "auto";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "13": typeof _13;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridTemplateColumns" {
  export const _1: "repeat(1, minmax(0, 1fr))";
  export const _2: "repeat(2, minmax(0, 1fr))";
  export const _3: "repeat(3, minmax(0, 1fr))";
  export const _4: "repeat(4, minmax(0, 1fr))";
  export const _5: "repeat(5, minmax(0, 1fr))";
  export const _6: "repeat(6, minmax(0, 1fr))";
  export const _7: "repeat(7, minmax(0, 1fr))";
  export const _8: "repeat(8, minmax(0, 1fr))";
  export const _9: "repeat(9, minmax(0, 1fr))";
  export const _10: "repeat(10, minmax(0, 1fr))";
  export const _11: "repeat(11, minmax(0, 1fr))";
  export const _12: "repeat(12, minmax(0, 1fr))";
  export const _none: "none";
  export const _subgrid: "subgrid";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    none: typeof _none;
    subgrid: typeof _subgrid;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/gridTemplateRows" {
  export const _1: "repeat(1, minmax(0, 1fr))";
  export const _2: "repeat(2, minmax(0, 1fr))";
  export const _3: "repeat(3, minmax(0, 1fr))";
  export const _4: "repeat(4, minmax(0, 1fr))";
  export const _5: "repeat(5, minmax(0, 1fr))";
  export const _6: "repeat(6, minmax(0, 1fr))";
  export const _7: "repeat(7, minmax(0, 1fr))";
  export const _8: "repeat(8, minmax(0, 1fr))";
  export const _9: "repeat(9, minmax(0, 1fr))";
  export const _10: "repeat(10, minmax(0, 1fr))";
  export const _11: "repeat(11, minmax(0, 1fr))";
  export const _12: "repeat(12, minmax(0, 1fr))";
  export const _none: "none";
  export const _subgrid: "subgrid";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    none: typeof _none;
    subgrid: typeof _subgrid;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/height" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  export const _full: "100%";
  export const _screen: "100vh";
  export const _svh: "100svh";
  export const _lvh: "100lvh";
  export const _dvh: "100dvh";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    full: typeof _full;
    screen: typeof _screen;
    svh: typeof _svh;
    lvh: typeof _lvh;
    dvh: typeof _dvh;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
    "1/5": "20%";
    "2/5": "40%";
    "3/5": "60%";
    "4/5": "80%";
    "1/6": "16.666667%";
    "2/6": "33.333333%";
    "3/6": "50%";
    "4/6": "66.666667%";
    "5/6": "83.333333%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/hueRotate" {
  export const _0: "0deg";
  export const _15: "15deg";
  export const _30: "30deg";
  export const _60: "60deg";
  export const _90: "90deg";
  export const _180: "180deg";
  const defaultExport: {
    "0": typeof _0;
    "15": typeof _15;
    "30": typeof _30;
    "60": typeof _60;
    "90": typeof _90;
    "180": typeof _180;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/inset" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  export const _full: "100%";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    full: typeof _full;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/invert" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/keyframes" {
  export const _spin: { to: { transform: "rotate(360deg)" } };
  export const _ping: { "75%, 100%": { transform: "scale(2)"; opacity: "0" } };
  export const _pulse: { "50%": { opacity: ".5" } };
  export const _bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)";
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)";
    };
    "50%": {
      transform: "none";
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)";
    };
  };
  const defaultExport: {
    spin: typeof _spin;
    ping: typeof _ping;
    pulse: typeof _pulse;
    bounce: typeof _bounce;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/letterSpacing" {
  export const _tighter: "-0.05em";
  export const _tight: "-0.025em";
  export const _normal: "0em";
  export const _wide: "0.025em";
  export const _wider: "0.05em";
  export const _widest: "0.1em";
  const defaultExport: {
    tighter: typeof _tighter;
    tight: typeof _tight;
    normal: typeof _normal;
    wide: typeof _wide;
    wider: typeof _wider;
    widest: typeof _widest;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/lineHeight" {
  export const _3: ".75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _none: "1";
  export const _tight: "1.25";
  export const _snug: "1.375";
  export const _normal: "1.5";
  export const _relaxed: "1.625";
  export const _loose: "2";
  const defaultExport: {
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    none: typeof _none;
    tight: typeof _tight;
    snug: typeof _snug;
    normal: typeof _normal;
    relaxed: typeof _relaxed;
    loose: typeof _loose;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/listStyleType" {
  export const _none: "none";
  export const _disc: "disc";
  export const _decimal: "decimal";
  const defaultExport: {
    none: typeof _none;
    disc: typeof _disc;
    decimal: typeof _decimal;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/listStyleImage" {
  export const _none: "none";
  const defaultExport: { none: typeof _none };
  export default defaultExport;
}
declare module "#tailwind-config/theme/margin" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/lineClamp" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/maxHeight" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  export const _none: "none";
  export const _full: "100%";
  export const _screen: "100vh";
  export const _svh: "100svh";
  export const _lvh: "100lvh";
  export const _dvh: "100dvh";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    none: typeof _none;
    full: typeof _full;
    screen: typeof _screen;
    svh: typeof _svh;
    lvh: typeof _lvh;
    dvh: typeof _dvh;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/maxWidth" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  export const _none: "none";
  export const _xs: "20rem";
  export const _sm: "24rem";
  export const _md: "28rem";
  export const _lg: "32rem";
  export const _xl: "36rem";
  export const _2xl: "42rem";
  export const _3xl: "48rem";
  export const _4xl: "56rem";
  export const _5xl: "64rem";
  export const _6xl: "72rem";
  export const _7xl: "80rem";
  export const _full: "100%";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  export const _prose: "65ch";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    none: typeof _none;
    xs: typeof _xs;
    sm: typeof _sm;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
    "3xl": typeof _3xl;
    "4xl": typeof _4xl;
    "5xl": typeof _5xl;
    "6xl": typeof _6xl;
    "7xl": typeof _7xl;
    full: typeof _full;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    prose: typeof _prose;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "screen-sm": "640px";
    "screen-md": "768px";
    "screen-lg": "1024px";
    "screen-xl": "1280px";
    "screen-2xl": "1536px";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/minHeight" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  export const _full: "100%";
  export const _screen: "100vh";
  export const _svh: "100svh";
  export const _lvh: "100lvh";
  export const _dvh: "100dvh";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    full: typeof _full;
    screen: typeof _screen;
    svh: typeof _svh;
    lvh: typeof _lvh;
    dvh: typeof _dvh;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/minWidth" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  export const _full: "100%";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    full: typeof _full;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/objectPosition" {
  export const _bottom: "bottom";
  export const _center: "center";
  export const _left: "left";
  export const _right: "right";
  export const _top: "top";
  const defaultExport: {
    bottom: typeof _bottom;
    center: typeof _center;
    left: typeof _left;
    right: typeof _right;
    top: typeof _top;
    "left-bottom": "left bottom";
    "left-top": "left top";
    "right-bottom": "right bottom";
    "right-top": "right top";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/opacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/order" {
  export const _1: "1";
  export const _2: "2";
  export const _3: "3";
  export const _4: "4";
  export const _5: "5";
  export const _6: "6";
  export const _7: "7";
  export const _8: "8";
  export const _9: "9";
  export const _10: "10";
  export const _11: "11";
  export const _12: "12";
  export const _first: "-9999";
  export const _last: "9999";
  export const _none: "0";
  const defaultExport: {
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    first: typeof _first;
    last: typeof _last;
    none: typeof _none;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/outlineColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/outlineOffset" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/outlineWidth" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/padding" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/placeholderColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/placeholderOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/ringColor" {
  export const _DEFAULT: "#3b82f6";
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    DEFAULT: typeof _DEFAULT;
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/ringOffsetColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/ringOffsetWidth" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/ringOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  export const _DEFAULT: "0.5";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/ringWidth" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  export const _DEFAULT: "3px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/rotate" {
  export const _0: "0deg";
  export const _1: "1deg";
  export const _2: "2deg";
  export const _3: "3deg";
  export const _6: "6deg";
  export const _12: "12deg";
  export const _45: "45deg";
  export const _90: "90deg";
  export const _180: "180deg";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "6": typeof _6;
    "12": typeof _12;
    "45": typeof _45;
    "90": typeof _90;
    "180": typeof _180;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/saturate" {
  export const _0: "0";
  export const _50: ".5";
  export const _100: "1";
  export const _150: "1.5";
  export const _200: "2";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "100": typeof _100;
    "150": typeof _150;
    "200": typeof _200;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/scale" {
  export const _0: "0";
  export const _50: ".5";
  export const _75: ".75";
  export const _90: ".9";
  export const _95: ".95";
  export const _100: "1";
  export const _105: "1.05";
  export const _110: "1.1";
  export const _125: "1.25";
  export const _150: "1.5";
  const defaultExport: {
    "0": typeof _0;
    "50": typeof _50;
    "75": typeof _75;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
    "105": typeof _105;
    "110": typeof _110;
    "125": typeof _125;
    "150": typeof _150;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/screens" {
  export const _sm: "640px";
  export const _md: "768px";
  export const _lg: "1024px";
  export const _xl: "1280px";
  export const _2xl: "1536px";
  const defaultExport: {
    sm: typeof _sm;
    md: typeof _md;
    lg: typeof _lg;
    xl: typeof _xl;
    "2xl": typeof _2xl;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/scrollMargin" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/scrollPadding" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/sepia" {
  export const _0: "0";
  export const _DEFAULT: "100%";
  const defaultExport: { "0": typeof _0; DEFAULT: typeof _DEFAULT };
  export default defaultExport;
}
declare module "#tailwind-config/theme/skew" {
  export const _0: "0deg";
  export const _1: "1deg";
  export const _2: "2deg";
  export const _3: "3deg";
  export const _6: "6deg";
  export const _12: "12deg";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "6": typeof _6;
    "12": typeof _12;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/space" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/spacing" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/stroke" {
  export const _none: "none";
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    none: typeof _none;
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/strokeWidth" {
  export const _0: "0";
  export const _1: "1";
  export const _2: "2";
  const defaultExport: { "0": typeof _0; "1": typeof _1; "2": typeof _2 };
  export default defaultExport;
}
declare module "#tailwind-config/theme/supports" {
  const defaultExport: {};
  export default defaultExport;
}
declare module "#tailwind-config/theme/data" {
  const defaultExport: {};
  export default defaultExport;
}
declare module "#tailwind-config/theme/textColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/textDecorationColor" {
  export const _inherit: "inherit";
  export const _current: "currentColor";
  export const _transparent: "transparent";
  export const _black: "#000";
  export const _white: "#fff";
  export const _slate: {
    "50": "#f8fafc";
    "100": "#f1f5f9";
    "200": "#e2e8f0";
    "300": "#cbd5e1";
    "400": "#94a3b8";
    "500": "#64748b";
    "600": "#475569";
    "700": "#334155";
    "800": "#1e293b";
    "900": "#0f172a";
    "950": "#020420";
  };
  export const _gray: {
    "50": "rgb(var(--color-gray-50) / <alpha-value>)";
    "100": "rgb(var(--color-gray-100) / <alpha-value>)";
    "200": "rgb(var(--color-gray-200) / <alpha-value>)";
    "300": "rgb(var(--color-gray-300) / <alpha-value>)";
    "400": "rgb(var(--color-gray-400) / <alpha-value>)";
    "500": "rgb(var(--color-gray-500) / <alpha-value>)";
    "600": "rgb(var(--color-gray-600) / <alpha-value>)";
    "700": "rgb(var(--color-gray-700) / <alpha-value>)";
    "800": "rgb(var(--color-gray-800) / <alpha-value>)";
    "900": "rgb(var(--color-gray-900) / <alpha-value>)";
    "950": "rgb(var(--color-gray-950) / <alpha-value>)";
  };
  export const _zinc: {
    "50": "#fafafa";
    "100": "#f4f4f5";
    "200": "#e4e4e7";
    "300": "#d4d4d8";
    "400": "#a1a1aa";
    "500": "#71717a";
    "600": "#52525b";
    "700": "#3f3f46";
    "800": "#27272a";
    "900": "#18181b";
    "950": "#09090b";
  };
  export const _neutral: {
    "50": "#fafafa";
    "100": "#f5f5f5";
    "200": "#e5e5e5";
    "300": "#d4d4d4";
    "400": "#a3a3a3";
    "500": "#737373";
    "600": "#525252";
    "700": "#404040";
    "800": "#262626";
    "900": "#171717";
    "950": "#0a0a0a";
  };
  export const _stone: {
    "50": "#fafaf9";
    "100": "#f5f5f4";
    "200": "#e7e5e4";
    "300": "#d6d3d1";
    "400": "#a8a29e";
    "500": "#78716c";
    "600": "#57534e";
    "700": "#44403c";
    "800": "#292524";
    "900": "#1c1917";
    "950": "#0c0a09";
  };
  export const _red: {
    "50": "#fef2f2";
    "100": "#fee2e2";
    "200": "#fecaca";
    "300": "#fca5a5";
    "400": "#f87171";
    "500": "#ef4444";
    "600": "#dc2626";
    "700": "#b91c1c";
    "800": "#991b1b";
    "900": "#7f1d1d";
    "950": "#450a0a";
  };
  export const _orange: {
    "50": "#fff7ed";
    "100": "#ffedd5";
    "200": "#fed7aa";
    "300": "#fdba74";
    "400": "#fb923c";
    "500": "#f97316";
    "600": "#ea580c";
    "700": "#c2410c";
    "800": "#9a3412";
    "900": "#7c2d12";
    "950": "#431407";
  };
  export const _amber: {
    "50": "#fffbeb";
    "100": "#fef3c7";
    "200": "#fde68a";
    "300": "#fcd34d";
    "400": "#fbbf24";
    "500": "#f59e0b";
    "600": "#d97706";
    "700": "#b45309";
    "800": "#92400e";
    "900": "#78350f";
    "950": "#451a03";
  };
  export const _yellow: {
    "50": "#fefce8";
    "100": "#fef9c3";
    "200": "#fef08a";
    "300": "#fde047";
    "400": "#facc15";
    "500": "#eab308";
    "600": "#ca8a04";
    "700": "#a16207";
    "800": "#854d0e";
    "900": "#713f12";
    "950": "#422006";
  };
  export const _lime: {
    "50": "#f7fee7";
    "100": "#ecfccb";
    "200": "#d9f99d";
    "300": "#bef264";
    "400": "#a3e635";
    "500": "#84cc16";
    "600": "#65a30d";
    "700": "#4d7c0f";
    "800": "#3f6212";
    "900": "#365314";
    "950": "#1a2e05";
  };
  export const _green: {
    "50": "#EFFDF5";
    "100": "#D9FBE8";
    "200": "#B3F5D1";
    "300": "#75EDAE";
    "400": "#00DC82";
    "500": "#00C16A";
    "600": "#00A155";
    "700": "#007F45";
    "800": "#016538";
    "900": "#0A5331";
    "950": "#052e16";
  };
  export const _emerald: {
    "50": "#ecfdf5";
    "100": "#d1fae5";
    "200": "#a7f3d0";
    "300": "#6ee7b7";
    "400": "#34d399";
    "500": "#10b981";
    "600": "#059669";
    "700": "#047857";
    "800": "#065f46";
    "900": "#064e3b";
    "950": "#022c22";
  };
  export const _teal: {
    "50": "#f0fdfa";
    "100": "#ccfbf1";
    "200": "#99f6e4";
    "300": "#5eead4";
    "400": "#2dd4bf";
    "500": "#14b8a6";
    "600": "#0d9488";
    "700": "#0f766e";
    "800": "#115e59";
    "900": "#134e4a";
    "950": "#042f2e";
  };
  export const _cyan: {
    "50": "#ecfeff";
    "100": "#cffafe";
    "200": "#a5f3fc";
    "300": "#67e8f9";
    "400": "#22d3ee";
    "500": "#06b6d4";
    "600": "#0891b2";
    "700": "#0e7490";
    "800": "#155e75";
    "900": "#164e63";
    "950": "#083344";
  };
  export const _sky: {
    "50": "#f0f9ff";
    "100": "#e0f2fe";
    "200": "#bae6fd";
    "300": "#7dd3fc";
    "400": "#38bdf8";
    "500": "#0ea5e9";
    "600": "#0284c7";
    "700": "#0369a1";
    "800": "#075985";
    "900": "#0c4a6e";
    "950": "#082f49";
  };
  export const _blue: {
    "50": "#eff6ff";
    "100": "#dbeafe";
    "200": "#bfdbfe";
    "300": "#93c5fd";
    "400": "#60a5fa";
    "500": "#3b82f6";
    "600": "#2563eb";
    "700": "#1d4ed8";
    "800": "#1e40af";
    "900": "#1e3a8a";
    "950": "#172554";
  };
  export const _indigo: {
    "50": "#eef2ff";
    "100": "#e0e7ff";
    "200": "#c7d2fe";
    "300": "#a5b4fc";
    "400": "#818cf8";
    "500": "#6366f1";
    "600": "#4f46e5";
    "700": "#4338ca";
    "800": "#3730a3";
    "900": "#312e81";
    "950": "#1e1b4b";
  };
  export const _violet: {
    "50": "#f5f3ff";
    "100": "#ede9fe";
    "200": "#ddd6fe";
    "300": "#c4b5fd";
    "400": "#a78bfa";
    "500": "#8b5cf6";
    "600": "#7c3aed";
    "700": "#6d28d9";
    "800": "#5b21b6";
    "900": "#4c1d95";
    "950": "#2e1065";
  };
  export const _purple: {
    "50": "#faf5ff";
    "100": "#f3e8ff";
    "200": "#e9d5ff";
    "300": "#d8b4fe";
    "400": "#c084fc";
    "500": "#a855f7";
    "600": "#9333ea";
    "700": "#7e22ce";
    "800": "#6b21a8";
    "900": "#581c87";
    "950": "#3b0764";
  };
  export const _fuchsia: {
    "50": "#fdf4ff";
    "100": "#fae8ff";
    "200": "#f5d0fe";
    "300": "#f0abfc";
    "400": "#e879f9";
    "500": "#d946ef";
    "600": "#c026d3";
    "700": "#a21caf";
    "800": "#86198f";
    "900": "#701a75";
    "950": "#4a044e";
  };
  export const _pink: {
    "50": "#fdf2f8";
    "100": "#fce7f3";
    "200": "#fbcfe8";
    "300": "#f9a8d4";
    "400": "#f472b6";
    "500": "#ec4899";
    "600": "#db2777";
    "700": "#be185d";
    "800": "#9d174d";
    "900": "#831843";
    "950": "#500724";
  };
  export const _rose: {
    "50": "#fff1f2";
    "100": "#ffe4e6";
    "200": "#fecdd3";
    "300": "#fda4af";
    "400": "#fb7185";
    "500": "#f43f5e";
    "600": "#e11d48";
    "700": "#be123c";
    "800": "#9f1239";
    "900": "#881337";
    "950": "#4c0519";
  };
  export const _background: "rgb(var(--ui-background) / <alpha-value>)";
  export const _foreground: "rgb(var(--ui-foreground) / <alpha-value>)";
  export const _primary: {
    "50": "rgb(var(--color-primary-50) / <alpha-value>)";
    "100": "rgb(var(--color-primary-100) / <alpha-value>)";
    "200": "rgb(var(--color-primary-200) / <alpha-value>)";
    "300": "rgb(var(--color-primary-300) / <alpha-value>)";
    "400": "rgb(var(--color-primary-400) / <alpha-value>)";
    "500": "rgb(var(--color-primary-500) / <alpha-value>)";
    "600": "rgb(var(--color-primary-600) / <alpha-value>)";
    "700": "rgb(var(--color-primary-700) / <alpha-value>)";
    "800": "rgb(var(--color-primary-800) / <alpha-value>)";
    "900": "rgb(var(--color-primary-900) / <alpha-value>)";
    "950": "rgb(var(--color-primary-950) / <alpha-value>)";
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)";
  };
  export const _cool: {
    "50": "#f9fafb";
    "100": "#f3f4f6";
    "200": "#e5e7eb";
    "300": "#d1d5db";
    "400": "#9ca3af";
    "500": "#6b7280";
    "600": "#4b5563";
    "700": "#374151";
    "800": "#1f2937";
    "900": "#111827";
    "950": "#030712";
  };
  const defaultExport: {
    inherit: typeof _inherit;
    current: typeof _current;
    transparent: typeof _transparent;
    black: typeof _black;
    white: typeof _white;
    slate: typeof _slate;
    gray: typeof _gray;
    zinc: typeof _zinc;
    neutral: typeof _neutral;
    stone: typeof _stone;
    red: typeof _red;
    orange: typeof _orange;
    amber: typeof _amber;
    yellow: typeof _yellow;
    lime: typeof _lime;
    green: typeof _green;
    emerald: typeof _emerald;
    teal: typeof _teal;
    cyan: typeof _cyan;
    sky: typeof _sky;
    blue: typeof _blue;
    indigo: typeof _indigo;
    violet: typeof _violet;
    purple: typeof _purple;
    fuchsia: typeof _fuchsia;
    pink: typeof _pink;
    rose: typeof _rose;
    background: typeof _background;
    foreground: typeof _foreground;
    primary: typeof _primary;
    cool: typeof _cool;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/textDecorationThickness" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  export const _auto: "auto";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
    auto: typeof _auto;
    "from-font": "from-font";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/textIndent" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/textOpacity" {
  export const _0: "0";
  export const _5: "0.05";
  export const _10: "0.1";
  export const _15: "0.15";
  export const _20: "0.2";
  export const _25: "0.25";
  export const _30: "0.3";
  export const _35: "0.35";
  export const _40: "0.4";
  export const _45: "0.45";
  export const _50: "0.5";
  export const _55: "0.55";
  export const _60: "0.6";
  export const _65: "0.65";
  export const _70: "0.7";
  export const _75: "0.75";
  export const _80: "0.8";
  export const _85: "0.85";
  export const _90: "0.9";
  export const _95: "0.95";
  export const _100: "1";
  const defaultExport: {
    "0": typeof _0;
    "5": typeof _5;
    "10": typeof _10;
    "15": typeof _15;
    "20": typeof _20;
    "25": typeof _25;
    "30": typeof _30;
    "35": typeof _35;
    "40": typeof _40;
    "45": typeof _45;
    "50": typeof _50;
    "55": typeof _55;
    "60": typeof _60;
    "65": typeof _65;
    "70": typeof _70;
    "75": typeof _75;
    "80": typeof _80;
    "85": typeof _85;
    "90": typeof _90;
    "95": typeof _95;
    "100": typeof _100;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/textUnderlineOffset" {
  export const _0: "0px";
  export const _1: "1px";
  export const _2: "2px";
  export const _4: "4px";
  export const _8: "8px";
  export const _auto: "auto";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "4": typeof _4;
    "8": typeof _8;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/transformOrigin" {
  export const _center: "center";
  export const _top: "top";
  export const _right: "right";
  export const _bottom: "bottom";
  export const _left: "left";
  const defaultExport: {
    center: typeof _center;
    top: typeof _top;
    right: typeof _right;
    bottom: typeof _bottom;
    left: typeof _left;
    "top-right": "top right";
    "bottom-right": "bottom right";
    "bottom-left": "bottom left";
    "top-left": "top left";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/transitionDelay" {
  export const _0: "0s";
  export const _75: "75ms";
  export const _100: "100ms";
  export const _150: "150ms";
  export const _200: "200ms";
  export const _300: "300ms";
  export const _500: "500ms";
  export const _700: "700ms";
  export const _1000: "1000ms";
  const defaultExport: {
    "0": typeof _0;
    "75": typeof _75;
    "100": typeof _100;
    "150": typeof _150;
    "200": typeof _200;
    "300": typeof _300;
    "500": typeof _500;
    "700": typeof _700;
    "1000": typeof _1000;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/transitionDuration" {
  export const _0: "0s";
  export const _75: "75ms";
  export const _100: "100ms";
  export const _150: "150ms";
  export const _200: "200ms";
  export const _300: "300ms";
  export const _500: "500ms";
  export const _700: "700ms";
  export const _1000: "1000ms";
  export const _DEFAULT: "150ms";
  const defaultExport: {
    "0": typeof _0;
    "75": typeof _75;
    "100": typeof _100;
    "150": typeof _150;
    "200": typeof _200;
    "300": typeof _300;
    "500": typeof _500;
    "700": typeof _700;
    "1000": typeof _1000;
    DEFAULT: typeof _DEFAULT;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/transitionProperty" {
  export const _none: "none";
  export const _all: "all";
  export const _DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter";
  export const _colors: "color, background-color, border-color, text-decoration-color, fill, stroke";
  export const _opacity: "opacity";
  export const _shadow: "box-shadow";
  export const _transform: "transform";
  const defaultExport: {
    none: typeof _none;
    all: typeof _all;
    DEFAULT: typeof _DEFAULT;
    colors: typeof _colors;
    opacity: typeof _opacity;
    shadow: typeof _shadow;
    transform: typeof _transform;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/transitionTimingFunction" {
  export const _DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)";
  export const _linear: "linear";
  export const _in: "cubic-bezier(0.4, 0, 1, 1)";
  export const _out: "cubic-bezier(0, 0, 0.2, 1)";
  const defaultExport: {
    DEFAULT: typeof _DEFAULT;
    linear: typeof _linear;
    in: typeof _in;
    out: typeof _out;
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/translate" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _px: "1px";
  export const _full: "100%";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    px: typeof _px;
    full: typeof _full;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/size" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  export const _full: "100%";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    full: typeof _full;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
    "1/5": "20%";
    "2/5": "40%";
    "3/5": "60%";
    "4/5": "80%";
    "1/6": "16.666667%";
    "2/6": "33.333333%";
    "3/6": "50%";
    "4/6": "66.666667%";
    "5/6": "83.333333%";
    "1/12": "8.333333%";
    "2/12": "16.666667%";
    "3/12": "25%";
    "4/12": "33.333333%";
    "5/12": "41.666667%";
    "6/12": "50%";
    "7/12": "58.333333%";
    "8/12": "66.666667%";
    "9/12": "75%";
    "10/12": "83.333333%";
    "11/12": "91.666667%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/width" {
  export const _0: "0px";
  export const _1: "0.25rem";
  export const _2: "0.5rem";
  export const _3: "0.75rem";
  export const _4: "1rem";
  export const _5: "1.25rem";
  export const _6: "1.5rem";
  export const _7: "1.75rem";
  export const _8: "2rem";
  export const _9: "2.25rem";
  export const _10: "2.5rem";
  export const _11: "2.75rem";
  export const _12: "3rem";
  export const _14: "3.5rem";
  export const _16: "4rem";
  export const _20: "5rem";
  export const _24: "6rem";
  export const _28: "7rem";
  export const _32: "8rem";
  export const _36: "9rem";
  export const _40: "10rem";
  export const _44: "11rem";
  export const _48: "12rem";
  export const _52: "13rem";
  export const _56: "14rem";
  export const _60: "15rem";
  export const _64: "16rem";
  export const _72: "18rem";
  export const _80: "20rem";
  export const _96: "24rem";
  export const _auto: "auto";
  export const _px: "1px";
  export const _full: "100%";
  export const _screen: "100vw";
  export const _svw: "100svw";
  export const _lvw: "100lvw";
  export const _dvw: "100dvw";
  export const _min: "min-content";
  export const _max: "max-content";
  export const _fit: "fit-content";
  const defaultExport: {
    "0": typeof _0;
    "1": typeof _1;
    "2": typeof _2;
    "3": typeof _3;
    "4": typeof _4;
    "5": typeof _5;
    "6": typeof _6;
    "7": typeof _7;
    "8": typeof _8;
    "9": typeof _9;
    "10": typeof _10;
    "11": typeof _11;
    "12": typeof _12;
    "14": typeof _14;
    "16": typeof _16;
    "20": typeof _20;
    "24": typeof _24;
    "28": typeof _28;
    "32": typeof _32;
    "36": typeof _36;
    "40": typeof _40;
    "44": typeof _44;
    "48": typeof _48;
    "52": typeof _52;
    "56": typeof _56;
    "60": typeof _60;
    "64": typeof _64;
    "72": typeof _72;
    "80": typeof _80;
    "96": typeof _96;
    auto: typeof _auto;
    px: typeof _px;
    full: typeof _full;
    screen: typeof _screen;
    svw: typeof _svw;
    lvw: typeof _lvw;
    dvw: typeof _dvw;
    min: typeof _min;
    max: typeof _max;
    fit: typeof _fit;
    "0.5": "0.125rem";
    "1.5": "0.375rem";
    "2.5": "0.625rem";
    "3.5": "0.875rem";
    "1/2": "50%";
    "1/3": "33.333333%";
    "2/3": "66.666667%";
    "1/4": "25%";
    "2/4": "50%";
    "3/4": "75%";
    "1/5": "20%";
    "2/5": "40%";
    "3/5": "60%";
    "4/5": "80%";
    "1/6": "16.666667%";
    "2/6": "33.333333%";
    "3/6": "50%";
    "4/6": "66.666667%";
    "5/6": "83.333333%";
    "1/12": "8.333333%";
    "2/12": "16.666667%";
    "3/12": "25%";
    "4/12": "33.333333%";
    "5/12": "41.666667%";
    "6/12": "50%";
    "7/12": "58.333333%";
    "8/12": "66.666667%";
    "9/12": "75%";
    "10/12": "83.333333%";
    "11/12": "91.666667%";
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/willChange" {
  export const _auto: "auto";
  export const _scroll: "scroll-position";
  export const _contents: "contents";
  export const _transform: "transform";
  const defaultExport: {
    auto: typeof _auto;
    scroll: typeof _scroll;
    contents: typeof _contents;
    transform: typeof _transform;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme/zIndex" {
  export const _0: "0";
  export const _10: "10";
  export const _20: "20";
  export const _30: "30";
  export const _40: "40";
  export const _50: "50";
  export const _auto: "auto";
  const defaultExport: {
    "0": typeof _0;
    "10": typeof _10;
    "20": typeof _20;
    "30": typeof _30;
    "40": typeof _40;
    "50": typeof _50;
    auto: typeof _auto;
  };
  export default defaultExport;
}
declare module "#tailwind-config/theme" {
  export const _aspectRatio: typeof import("#tailwind-config/theme/aspectRatio")["default"];
  export const _typography: typeof import("#tailwind-config/theme/typography")["default"];
  export const _containers: typeof import("#tailwind-config/theme/containers")["default"];
  export const _accentColor: typeof import("#tailwind-config/theme/accentColor")["default"];
  export const _animation: typeof import("#tailwind-config/theme/animation")["default"];
  export const _aria: typeof import("#tailwind-config/theme/aria")["default"];
  export const _backdropBlur: typeof import("#tailwind-config/theme/backdropBlur")["default"];
  export const _backdropBrightness: typeof import("#tailwind-config/theme/backdropBrightness")["default"];
  export const _backdropContrast: typeof import("#tailwind-config/theme/backdropContrast")["default"];
  export const _backdropGrayscale: typeof import("#tailwind-config/theme/backdropGrayscale")["default"];
  export const _backdropHueRotate: typeof import("#tailwind-config/theme/backdropHueRotate")["default"];
  export const _backdropInvert: typeof import("#tailwind-config/theme/backdropInvert")["default"];
  export const _backdropOpacity: typeof import("#tailwind-config/theme/backdropOpacity")["default"];
  export const _backdropSaturate: typeof import("#tailwind-config/theme/backdropSaturate")["default"];
  export const _backdropSepia: typeof import("#tailwind-config/theme/backdropSepia")["default"];
  export const _backgroundColor: typeof import("#tailwind-config/theme/backgroundColor")["default"];
  export const _backgroundImage: typeof import("#tailwind-config/theme/backgroundImage")["default"];
  export const _backgroundOpacity: typeof import("#tailwind-config/theme/backgroundOpacity")["default"];
  export const _backgroundPosition: typeof import("#tailwind-config/theme/backgroundPosition")["default"];
  export const _backgroundSize: typeof import("#tailwind-config/theme/backgroundSize")["default"];
  export const _blur: typeof import("#tailwind-config/theme/blur")["default"];
  export const _borderColor: typeof import("#tailwind-config/theme/borderColor")["default"];
  export const _borderOpacity: typeof import("#tailwind-config/theme/borderOpacity")["default"];
  export const _borderRadius: typeof import("#tailwind-config/theme/borderRadius")["default"];
  export const _borderSpacing: typeof import("#tailwind-config/theme/borderSpacing")["default"];
  export const _borderWidth: typeof import("#tailwind-config/theme/borderWidth")["default"];
  export const _boxShadow: typeof import("#tailwind-config/theme/boxShadow")["default"];
  export const _boxShadowColor: typeof import("#tailwind-config/theme/boxShadowColor")["default"];
  export const _brightness: typeof import("#tailwind-config/theme/brightness")["default"];
  export const _caretColor: typeof import("#tailwind-config/theme/caretColor")["default"];
  export const _colors: typeof import("#tailwind-config/theme/colors")["default"];
  export const _columns: typeof import("#tailwind-config/theme/columns")["default"];
  export const _container: typeof import("#tailwind-config/theme/container")["default"];
  export const _content: typeof import("#tailwind-config/theme/content")["default"];
  export const _contrast: typeof import("#tailwind-config/theme/contrast")["default"];
  export const _cursor: typeof import("#tailwind-config/theme/cursor")["default"];
  export const _divideColor: typeof import("#tailwind-config/theme/divideColor")["default"];
  export const _divideOpacity: typeof import("#tailwind-config/theme/divideOpacity")["default"];
  export const _divideWidth: typeof import("#tailwind-config/theme/divideWidth")["default"];
  export const _dropShadow: typeof import("#tailwind-config/theme/dropShadow")["default"];
  export const _fill: typeof import("#tailwind-config/theme/fill")["default"];
  export const _flex: typeof import("#tailwind-config/theme/flex")["default"];
  export const _flexBasis: typeof import("#tailwind-config/theme/flexBasis")["default"];
  export const _flexGrow: typeof import("#tailwind-config/theme/flexGrow")["default"];
  export const _flexShrink: typeof import("#tailwind-config/theme/flexShrink")["default"];
  export const _fontFamily: typeof import("#tailwind-config/theme/fontFamily")["default"];
  export const _fontSize: typeof import("#tailwind-config/theme/fontSize")["default"];
  export const _fontWeight: typeof import("#tailwind-config/theme/fontWeight")["default"];
  export const _gap: typeof import("#tailwind-config/theme/gap")["default"];
  export const _gradientColorStops: typeof import("#tailwind-config/theme/gradientColorStops")["default"];
  export const _gradientColorStopPositions: typeof import("#tailwind-config/theme/gradientColorStopPositions")["default"];
  export const _grayscale: typeof import("#tailwind-config/theme/grayscale")["default"];
  export const _gridAutoColumns: typeof import("#tailwind-config/theme/gridAutoColumns")["default"];
  export const _gridAutoRows: typeof import("#tailwind-config/theme/gridAutoRows")["default"];
  export const _gridColumn: typeof import("#tailwind-config/theme/gridColumn")["default"];
  export const _gridColumnEnd: typeof import("#tailwind-config/theme/gridColumnEnd")["default"];
  export const _gridColumnStart: typeof import("#tailwind-config/theme/gridColumnStart")["default"];
  export const _gridRow: typeof import("#tailwind-config/theme/gridRow")["default"];
  export const _gridRowEnd: typeof import("#tailwind-config/theme/gridRowEnd")["default"];
  export const _gridRowStart: typeof import("#tailwind-config/theme/gridRowStart")["default"];
  export const _gridTemplateColumns: typeof import("#tailwind-config/theme/gridTemplateColumns")["default"];
  export const _gridTemplateRows: typeof import("#tailwind-config/theme/gridTemplateRows")["default"];
  export const _height: typeof import("#tailwind-config/theme/height")["default"];
  export const _hueRotate: typeof import("#tailwind-config/theme/hueRotate")["default"];
  export const _inset: typeof import("#tailwind-config/theme/inset")["default"];
  export const _invert: typeof import("#tailwind-config/theme/invert")["default"];
  export const _keyframes: typeof import("#tailwind-config/theme/keyframes")["default"];
  export const _letterSpacing: typeof import("#tailwind-config/theme/letterSpacing")["default"];
  export const _lineHeight: typeof import("#tailwind-config/theme/lineHeight")["default"];
  export const _listStyleType: typeof import("#tailwind-config/theme/listStyleType")["default"];
  export const _listStyleImage: typeof import("#tailwind-config/theme/listStyleImage")["default"];
  export const _margin: typeof import("#tailwind-config/theme/margin")["default"];
  export const _lineClamp: typeof import("#tailwind-config/theme/lineClamp")["default"];
  export const _maxHeight: typeof import("#tailwind-config/theme/maxHeight")["default"];
  export const _maxWidth: typeof import("#tailwind-config/theme/maxWidth")["default"];
  export const _minHeight: typeof import("#tailwind-config/theme/minHeight")["default"];
  export const _minWidth: typeof import("#tailwind-config/theme/minWidth")["default"];
  export const _objectPosition: typeof import("#tailwind-config/theme/objectPosition")["default"];
  export const _opacity: typeof import("#tailwind-config/theme/opacity")["default"];
  export const _order: typeof import("#tailwind-config/theme/order")["default"];
  export const _outlineColor: typeof import("#tailwind-config/theme/outlineColor")["default"];
  export const _outlineOffset: typeof import("#tailwind-config/theme/outlineOffset")["default"];
  export const _outlineWidth: typeof import("#tailwind-config/theme/outlineWidth")["default"];
  export const _padding: typeof import("#tailwind-config/theme/padding")["default"];
  export const _placeholderColor: typeof import("#tailwind-config/theme/placeholderColor")["default"];
  export const _placeholderOpacity: typeof import("#tailwind-config/theme/placeholderOpacity")["default"];
  export const _ringColor: typeof import("#tailwind-config/theme/ringColor")["default"];
  export const _ringOffsetColor: typeof import("#tailwind-config/theme/ringOffsetColor")["default"];
  export const _ringOffsetWidth: typeof import("#tailwind-config/theme/ringOffsetWidth")["default"];
  export const _ringOpacity: typeof import("#tailwind-config/theme/ringOpacity")["default"];
  export const _ringWidth: typeof import("#tailwind-config/theme/ringWidth")["default"];
  export const _rotate: typeof import("#tailwind-config/theme/rotate")["default"];
  export const _saturate: typeof import("#tailwind-config/theme/saturate")["default"];
  export const _scale: typeof import("#tailwind-config/theme/scale")["default"];
  export const _screens: typeof import("#tailwind-config/theme/screens")["default"];
  export const _scrollMargin: typeof import("#tailwind-config/theme/scrollMargin")["default"];
  export const _scrollPadding: typeof import("#tailwind-config/theme/scrollPadding")["default"];
  export const _sepia: typeof import("#tailwind-config/theme/sepia")["default"];
  export const _skew: typeof import("#tailwind-config/theme/skew")["default"];
  export const _space: typeof import("#tailwind-config/theme/space")["default"];
  export const _spacing: typeof import("#tailwind-config/theme/spacing")["default"];
  export const _stroke: typeof import("#tailwind-config/theme/stroke")["default"];
  export const _strokeWidth: typeof import("#tailwind-config/theme/strokeWidth")["default"];
  export const _supports: typeof import("#tailwind-config/theme/supports")["default"];
  export const _data: typeof import("#tailwind-config/theme/data")["default"];
  export const _textColor: typeof import("#tailwind-config/theme/textColor")["default"];
  export const _textDecorationColor: typeof import("#tailwind-config/theme/textDecorationColor")["default"];
  export const _textDecorationThickness: typeof import("#tailwind-config/theme/textDecorationThickness")["default"];
  export const _textIndent: typeof import("#tailwind-config/theme/textIndent")["default"];
  export const _textOpacity: typeof import("#tailwind-config/theme/textOpacity")["default"];
  export const _textUnderlineOffset: typeof import("#tailwind-config/theme/textUnderlineOffset")["default"];
  export const _transformOrigin: typeof import("#tailwind-config/theme/transformOrigin")["default"];
  export const _transitionDelay: typeof import("#tailwind-config/theme/transitionDelay")["default"];
  export const _transitionDuration: typeof import("#tailwind-config/theme/transitionDuration")["default"];
  export const _transitionProperty: typeof import("#tailwind-config/theme/transitionProperty")["default"];
  export const _transitionTimingFunction: typeof import("#tailwind-config/theme/transitionTimingFunction")["default"];
  export const _translate: typeof import("#tailwind-config/theme/translate")["default"];
  export const _size: typeof import("#tailwind-config/theme/size")["default"];
  export const _width: typeof import("#tailwind-config/theme/width")["default"];
  export const _willChange: typeof import("#tailwind-config/theme/willChange")["default"];
  export const _zIndex: typeof import("#tailwind-config/theme/zIndex")["default"];
  const defaultExport: {
    aspectRatio: typeof _aspectRatio;
    typography: typeof _typography;
    containers: typeof _containers;
    accentColor: typeof _accentColor;
    animation: typeof _animation;
    aria: typeof _aria;
    backdropBlur: typeof _backdropBlur;
    backdropBrightness: typeof _backdropBrightness;
    backdropContrast: typeof _backdropContrast;
    backdropGrayscale: typeof _backdropGrayscale;
    backdropHueRotate: typeof _backdropHueRotate;
    backdropInvert: typeof _backdropInvert;
    backdropOpacity: typeof _backdropOpacity;
    backdropSaturate: typeof _backdropSaturate;
    backdropSepia: typeof _backdropSepia;
    backgroundColor: typeof _backgroundColor;
    backgroundImage: typeof _backgroundImage;
    backgroundOpacity: typeof _backgroundOpacity;
    backgroundPosition: typeof _backgroundPosition;
    backgroundSize: typeof _backgroundSize;
    blur: typeof _blur;
    borderColor: typeof _borderColor;
    borderOpacity: typeof _borderOpacity;
    borderRadius: typeof _borderRadius;
    borderSpacing: typeof _borderSpacing;
    borderWidth: typeof _borderWidth;
    boxShadow: typeof _boxShadow;
    boxShadowColor: typeof _boxShadowColor;
    brightness: typeof _brightness;
    caretColor: typeof _caretColor;
    colors: typeof _colors;
    columns: typeof _columns;
    container: typeof _container;
    content: typeof _content;
    contrast: typeof _contrast;
    cursor: typeof _cursor;
    divideColor: typeof _divideColor;
    divideOpacity: typeof _divideOpacity;
    divideWidth: typeof _divideWidth;
    dropShadow: typeof _dropShadow;
    fill: typeof _fill;
    flex: typeof _flex;
    flexBasis: typeof _flexBasis;
    flexGrow: typeof _flexGrow;
    flexShrink: typeof _flexShrink;
    fontFamily: typeof _fontFamily;
    fontSize: typeof _fontSize;
    fontWeight: typeof _fontWeight;
    gap: typeof _gap;
    gradientColorStops: typeof _gradientColorStops;
    gradientColorStopPositions: typeof _gradientColorStopPositions;
    grayscale: typeof _grayscale;
    gridAutoColumns: typeof _gridAutoColumns;
    gridAutoRows: typeof _gridAutoRows;
    gridColumn: typeof _gridColumn;
    gridColumnEnd: typeof _gridColumnEnd;
    gridColumnStart: typeof _gridColumnStart;
    gridRow: typeof _gridRow;
    gridRowEnd: typeof _gridRowEnd;
    gridRowStart: typeof _gridRowStart;
    gridTemplateColumns: typeof _gridTemplateColumns;
    gridTemplateRows: typeof _gridTemplateRows;
    height: typeof _height;
    hueRotate: typeof _hueRotate;
    inset: typeof _inset;
    invert: typeof _invert;
    keyframes: typeof _keyframes;
    letterSpacing: typeof _letterSpacing;
    lineHeight: typeof _lineHeight;
    listStyleType: typeof _listStyleType;
    listStyleImage: typeof _listStyleImage;
    margin: typeof _margin;
    lineClamp: typeof _lineClamp;
    maxHeight: typeof _maxHeight;
    maxWidth: typeof _maxWidth;
    minHeight: typeof _minHeight;
    minWidth: typeof _minWidth;
    objectPosition: typeof _objectPosition;
    opacity: typeof _opacity;
    order: typeof _order;
    outlineColor: typeof _outlineColor;
    outlineOffset: typeof _outlineOffset;
    outlineWidth: typeof _outlineWidth;
    padding: typeof _padding;
    placeholderColor: typeof _placeholderColor;
    placeholderOpacity: typeof _placeholderOpacity;
    ringColor: typeof _ringColor;
    ringOffsetColor: typeof _ringOffsetColor;
    ringOffsetWidth: typeof _ringOffsetWidth;
    ringOpacity: typeof _ringOpacity;
    ringWidth: typeof _ringWidth;
    rotate: typeof _rotate;
    saturate: typeof _saturate;
    scale: typeof _scale;
    screens: typeof _screens;
    scrollMargin: typeof _scrollMargin;
    scrollPadding: typeof _scrollPadding;
    sepia: typeof _sepia;
    skew: typeof _skew;
    space: typeof _space;
    spacing: typeof _spacing;
    stroke: typeof _stroke;
    strokeWidth: typeof _strokeWidth;
    supports: typeof _supports;
    data: typeof _data;
    textColor: typeof _textColor;
    textDecorationColor: typeof _textDecorationColor;
    textDecorationThickness: typeof _textDecorationThickness;
    textIndent: typeof _textIndent;
    textOpacity: typeof _textOpacity;
    textUnderlineOffset: typeof _textUnderlineOffset;
    transformOrigin: typeof _transformOrigin;
    transitionDelay: typeof _transitionDelay;
    transitionDuration: typeof _transitionDuration;
    transitionProperty: typeof _transitionProperty;
    transitionTimingFunction: typeof _transitionTimingFunction;
    translate: typeof _translate;
    size: typeof _size;
    width: typeof _width;
    willChange: typeof _willChange;
    zIndex: typeof _zIndex;
  };
  export default defaultExport;
}
declare module "#tailwind-config/corePlugins" {
  const defaultExport: [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "lineClamp",
    "display",
    "aspectRatio",
    "size",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "captionSide",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "listStyleImage",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "hyphens",
    "whitespace",
    "textWrap",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "contain",
    "content",
    "forcedColorAdjust"
  ];
  export default defaultExport;
}
declare module "#tailwind-config/plugins" {
  const defaultExport: [
    { __options: { strategy: "class" }; config: {} },
    {
      config: {
        theme: {
          aspectRatio: {
            "1": "1";
            "2": "2";
            "3": "3";
            "4": "4";
            "5": "5";
            "6": "6";
            "7": "7";
            "8": "8";
            "9": "9";
            "10": "10";
            "11": "11";
            "12": "12";
            "13": "13";
            "14": "14";
            "15": "15";
            "16": "16";
          };
        };
        variants: { aspectRatio: ["responsive"] };
      };
    },
    null,
    {
      config: {
        theme: {
          containers: {
            xs: "20rem";
            sm: "24rem";
            md: "28rem";
            lg: "32rem";
            xl: "36rem";
            "2xl": "42rem";
            "3xl": "48rem";
            "4xl": "56rem";
            "5xl": "64rem";
            "6xl": "72rem";
            "7xl": "80rem";
          };
        };
      };
    },
    null,
    {}
  ];
  export default defaultExport;
}
declare module "#tailwind-config/content/relative" {
  const defaultExport: false;
  export default defaultExport;
}
declare module "#tailwind-config/content/files" {
  const defaultExport: [
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/plugins/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/composables/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/utils/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/app.config.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/plugins/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/composables/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/utils/**/*.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "D:/GitHub/nuxt-site/content-main/docs/app.config.{js,ts,mjs}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}",
    "D:/GitHub/nuxt-site/content-main/docs/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/**/*.{vue,mjs,ts}",
    "D:/GitHub/nuxt-site/content-main/docs/.nuxt/content-cache/parsed/**/*.{md,yml,yaml,json}"
  ];
  export default defaultExport;
}
declare module "#tailwind-config/content/extract" {
  export const _vue: undefined;
  const defaultExport: { vue: typeof _vue };
  export default defaultExport;
}
declare module "#tailwind-config/content/transform" {
  export const _vue: undefined;
  const defaultExport: { vue: typeof _vue };
  export default defaultExport;
}
declare module "#tailwind-config/content" {
  export const _relative: typeof import("#tailwind-config/content/relative")["default"];
  export const _files: typeof import("#tailwind-config/content/files")["default"];
  export const _extract: typeof import("#tailwind-config/content/extract")["default"];
  export const _transform: typeof import("#tailwind-config/content/transform")["default"];
  const defaultExport: {
    relative: typeof _relative;
    files: typeof _files;
    extract: typeof _extract;
    transform: typeof _transform;
  };
  export default defaultExport;
}
declare module "#tailwind-config/darkMode" {
  const defaultExport: "class";
  export default defaultExport;
}
declare module "#tailwind-config/safelist" {
  const defaultExport: [
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["hover", "disabled"] },
    { pattern: {}; variants: ["hover"] },
    { pattern: {}; variants: ["dark", "dark:disabled"] },
    { pattern: {}; variants: ["disabled", "dark:hover"] },
    { pattern: {}; variants: ["hover"] },
    { pattern: {}; variants: ["dark:hover"] },
    { pattern: {}; variants: ["dark", "dark:hover", "dark:disabled"] },
    { pattern: {}; variants: ["dark", "dark:disabled"] },
    { pattern: {}; variants: ["dark:hover", "disabled"] },
    { pattern: {}; variants: ["hover"] },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark", "dark:focus"] },
    { pattern: {}; variants: ["focus"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark", "dark:focus"] },
    { pattern: {}; variants: ["focus"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark:focus-visible"] },
    { pattern: {}; variants: ["focus-visible"] },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    { pattern: {}; variants: ["dark"] },
    { pattern: {} },
    "bg-gray-500",
    "dark:bg-gray-400",
    "text-gray-500",
    "dark:text-gray-400"
  ];
  export default defaultExport;
}
declare module "#tailwind-config/variants/aspectRatio" {
  const defaultExport: ["responsive"];
  export default defaultExport;
}
declare module "#tailwind-config/variants" {
  export const _aspectRatio: typeof import("#tailwind-config/variants/aspectRatio")["default"];
  const defaultExport: { aspectRatio: typeof _aspectRatio };
  export default defaultExport;
}
declare module "#tailwind-config/presets" {
  const defaultExport: [];
  export default defaultExport;
}
declare module "#tailwind-config/prefix" {
  const defaultExport: "";
  export default defaultExport;
}
declare module "#tailwind-config/important" {
  const defaultExport: false;
  export default defaultExport;
}
declare module "#tailwind-config/separator" {
  const defaultExport: ":";
  export default defaultExport;
}
declare module "#tailwind-config/blocklist" {
  const defaultExport: [];
  export default defaultExport;
}
declare module "#tailwind-config" {
  export const theme: typeof import("#tailwind-config/theme")["default"];
  export const corePlugins: typeof import("#tailwind-config/corePlugins")["default"];
  export const plugins: typeof import("#tailwind-config/plugins")["default"];
  export const content: typeof import("#tailwind-config/content")["default"];
  export const darkMode: typeof import("#tailwind-config/darkMode")["default"];
  export const safelist: typeof import("#tailwind-config/safelist")["default"];
  export const variants: typeof import("#tailwind-config/variants")["default"];
  export const presets: typeof import("#tailwind-config/presets")["default"];
  export const prefix: typeof import("#tailwind-config/prefix")["default"];
  export const important: typeof import("#tailwind-config/important")["default"];
  export const separator: typeof import("#tailwind-config/separator")["default"];
  export const blocklist: typeof import("#tailwind-config/blocklist")["default"];
  const defaultExport: {
    theme: typeof theme;
    corePlugins: typeof corePlugins;
    plugins: typeof plugins;
    content: typeof content;
    darkMode: typeof darkMode;
    safelist: typeof safelist;
    variants: typeof variants;
    presets: typeof presets;
    prefix: typeof prefix;
    important: typeof important;
    separator: typeof separator;
    blocklist: typeof blocklist;
  };
  export default defaultExport;
}
