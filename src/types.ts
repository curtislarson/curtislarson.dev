export interface ProjectData {
  readonly title: string;
  readonly slug?: string;
  readonly href?: string;
  readonly tags: string[];
  readonly content: string;
  readonly preview: string;
}
