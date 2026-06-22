# Japanese Translation Guide

This guide defines the translation policy for the official Japanese version of the 2025 China Open Source Annual Report.

## Japanese version maintainer

TAKASU Masakazu（@takasumasakazu） is responsible for the main translation, review, and maintenance of the Japanese version.

## Source Policy

- Use the original Chinese version as the primary source.
- The English version may be used only as a reference.
- Do not translate report chapters until a chapter translation task is explicitly started.

## Translation Style

- Translate into natural Japanese suitable for an annual report.
- Avoid word-for-word translation when it makes the Japanese text unnatural.
- Keep the tone clear, formal, and consistent across chapters.

## Japanese-Edition Editorial Note

- The Japanese version may include an additional note for Japanese readers.
- If added, it must be clearly labeled as a Japanese-edition editorial note.
- It must not be presented as part of the original Chinese report.

## Structure Preservation

- Preserve Markdown structure, heading hierarchy, tables, links, image paths, frontmatter, and references.
- Do not change numbers, data, organization names, project names, URLs, or citations.
- Keep organization and project names unchanged unless `ja/glossary.tsv` defines a Japanese form.

## Visual Assets

- Do not edit, recreate, translate, regenerate, redraw, or replace images, charts, graphs, diagrams, screenshots, SVGs, PNGs, or other visual assets.
- Keep all image paths and references unchanged.
- If an image or chart contains Chinese text, leave the image unchanged.
- If Japanese explanation is needed, add it in the surrounding Japanese text or caption instead of editing the image.
- The Japanese translation should focus on Markdown text, headings, captions, tables, and navigation.

## Terminology

- Use `ja/glossary.tsv` as the source of truth for terminology.
- Do not silently change confirmed glossary entries.
- If a confirmed glossary entry needs revision, discuss it first and update the glossary intentionally.
- If an important term is missing from the glossary, add it with `status=needs-review`.
- If a term is ambiguous, add a note explaining the ambiguity.

## Glossary Status

- `confirmed`: Approved terminology for the Japanese report.
- `needs-review`: Proposed terminology that requires review before broad use.

## Japanese editing style for Japanese OSS readers

- Write natural Japanese for Japanese open source readers.
- Reduce literal Chinese-style expressions.
- Add concise explanations when a China-specific organization, policy, business term, education term, or ecosystem term would be unclear to Japanese readers.
- Do not over-explain well-known global OSS terms.
- Remove Simplified Chinese text from the Japanese body unless it is necessary as an official name.
- Use English/common names first when available, with Japanese clarification if helpful.
- For Chinese companies and organizations, use English/common name plus Chinese name in parentheses on first appearance when useful.
- Use `本章のまとめ` instead of `小結`.
- Use `財団` for `基金会` unless it is part of an official organization name.
- Use `中国発`, `中国の`, or `中国製` depending on context; avoid literal `中国国産`.
- Use `車載OS` instead of `車両OS`.
- Use `フィジカルAI（Embodied AI）` on first appearance, then `フィジカルAI`.
- Use `オムニモーダル` rather than `全モーダル`.
- Avoid slogan-like or literal expressions such as:
  - `世界のオープンソース事業`
  - `制度的なインフラ`
  - `省級`
  - `普惠`
  - `能力の高地`
  - `栄養の還流`
  - `深水域`
  - `価値実現`
  - `商業化実装`
  - `閉ループ`

## Explaining unfamiliar concepts for Japanese OSS readers

- When a concept is familiar in Chinese policy, legal, or business discourse but not familiar to Japanese OSS readers, add a short explanation in the text.
- Do not simply translate terms literally if the Japanese reader would not understand the implication.
- Prefer concise explanatory Japanese over leaving a difficult term unexplained.
- Do not over-explain well-known global OSS terms.
- Do not change the legal or factual meaning when adding explanations.
- Avoid overstatement, especially for legal, license, compliance, regulation, and patent topics.
- When explaining legal or regulatory topics, use careful wording such as `可能性がある`, `論点になっている`, or `と見られます` when the source does not establish a definitive conclusion.
- For AI model licensing, distinguish where useful between source code, model weights, training data, generated content, and open-weight models.
- For unfamiliar legal or policy terms, add a short parenthetical or one explanatory sentence.
- For Chinese government bodies, ministries, and planning terms, use a natural Japanese rendering and add a concise role or period explanation when the name alone would be unclear.
- For unfamiliar Chinese organizations or initiatives, use English/common name first where available, and add a Japanese clarification.
- For patent-related topics, explain that `特許の開放` is different from ordinary source-code open source.
- When future chapters require many Japanese-reader clarifications, prefer updating this guide instead of repeating the same instructions in every Codex prompt.

Examples:

- permissive license: `商用利用・改変・再配布の制約が比較的少ないパーミッシブライセンス`
- open-weight model: `重みを公開するオープンウェイトモデル`
- SFC v. Vizio: GPLソフトウェアを含む消費者向け製品について、GPLに基づくソースコード開示が争点となったGPL執行の事例。
- EU Cyber Resilience Act（CRA）: 接続されるデジタル製品について、セキュリティ対策や脆弱性対応を求めるEU規制。
- OFAC sanctions: 国境を越えるオープンソース協働にも影響しうる、米国の制裁コンプライアンス。
- patent pool: 複数の組織が関連特許をまとめ、共通ルールの下で利用しやすくする仕組み。
- patent open source / patent opening: source-code open source と同一視せず、`特許を一定条件で開放する取り組み`として説明する。

## Explaining Chinese policy and governance terms

- When Chinese government policy terms, ministry names, local government programs, or industrial-policy slogans appear, add concise context for Japanese readers.
- Do not leave policy slogans as literal translations if the implication would be unclear.
- Explain who the policy actor is when helpful, such as a ministry, local government, development zone, foundation, or standards body.
- Explain why the policy matters for open source, rather than only translating the policy name.
- Keep explanations short and factual. Avoid political commentary.
- When a Chinese policy term resembles an official slogan, translate the meaning naturally and avoid slogan-like Japanese.
- For local government measures, add context about the city or region when it helps Japanese readers understand the industrial background.
- For monetary incentives, keep the original amount and explain the policy purpose if needed.
- For long-term plans such as `十五五`, explain them as the 15th Five-Year Plan or policy proposals toward that plan.
- For AI and open-source policy, distinguish between models, datasets, tools, compute resources, applications, and communities where useful.
- For AI model openness standards, explain that the issue is not only whether something is called “open source,” but which parts are open: source code, model weights, training/evaluation data, licensing terms, and reproducibility.
- For DPI, explain briefly that Digital Public Infrastructure refers to shared digital foundations such as digital ID, payment, and data exchange infrastructure.
- For automotive policy, explain terms such as SDV, vehicle OS, connected vehicles, vehicle AI, datasets, autonomous driving, and next-generation batteries when useful.
- For patent-related policy, explain that “patent opening” is different from ordinary source-code open source.
- For international-policy and diplomacy terms, keep the wording neutral and explain the concrete mechanism, such as standards, foundations, communities, public infrastructure, sanctions, export controls, or rule-making.
- When a chapter requires many Japanese-reader clarifications, prefer updating this guide with reusable rules instead of repeating the same detailed instructions in future prompts.

Examples:

- `AI+`: explain as a Chinese policy slogan for applying AI across industries and public services.
- `国家発展改革委員会`: explain as an economic policy agency when first mentioned if needed.
- `工業情報化部`: explain as the ministry responsible for industrial policy and information technology when first mentioned if needed.
- `北京経済技術開発区`: explain as a national-level industrial development zone in the Yizhuang area if relevant.
- `東湖高新区`: explain as Wuhan’s major high-tech industrial zone, also known as China Optics Valley, if relevant.
- `スマートコネクテッドカー`: explain as connected vehicles plus autonomous driving, vehicle AI, and vehicle data use.
- `大規模モデルのオープンソース・オープン等級標準`: explain as a standard for evaluating how open a large AI model is.
- `デジタル公共インフラ（DPI）`: explain as shared digital foundations such as digital ID, payment, and data exchange systems.

## Per-chapter editing workflow

- Edit only the chapter requested by the user.
- Stop before the next chapter heading.
- Use already-polished previous chapters as style reference.
- If the Japanese is too literal, retranslate the sentence or paragraph from the Chinese source.
- Preserve meaning and factual claims.
- Add glossary entries with `status=needs-review` when important recurring terms are missing.
- After editing, show `git diff --stat`, summarize changes, list glossary changes, list remaining Simplified Chinese strings, and do not commit automatically unless asked.
