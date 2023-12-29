import { HtmlConfig, HtmlConfigStyles } from "../../../blog/src/config.ts";

export interface HTMLDocumentProps extends HtmlConfig {
  theme?: string | object;
  body: string;
  styles: HtmlConfigStyles;
}

export default function HTMLDocument({ body, theme, title, styles, links, meta }: HTMLDocumentProps) {
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {title && <title>{title}</title>}
        {meta &&
          Object.entries(meta)
            .filter(([name, content]) => !!name && !!content)
            .map(([name, content]) =>
              name.startsWith("og:") ? (
                <meta property={name} content={String(content)} />
              ) : (
                <meta name={name} content={String(content)} />
              )
            )}
        {links && links.map(({ rel, href, ...rest }) => <link rel={rel} href={href} {...rest} />)}
        {styles.map((s) =>
          typeof s === "string" ? (
            <style dangerouslySetInnerHTML={{ __html: s }} />
          ) : (
            <link
              id={s.id}
              rel="stylesheet"
              href={s.href}
              dangerouslySetInnerHTML={s.text ? { __html: s.text } : undefined}
            />
          )
        )}
      </head>

      <body dangerouslySetInnerHTML={{ __html: body }}></body>
    </html>
  );
}
