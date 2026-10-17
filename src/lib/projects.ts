import { getCollection } from "astro:content";

export async function getProjects(
  { includeDrafts = import.meta.env.DEV }: { includeDrafts?: boolean } = {},
) {
  // Both the homepage and page generation use this rule. Production never includes drafts.
  const showDrafts = import.meta.env.DEV && includeDrafts;
  const projects = await getCollection("projects", ({ data }) => showDrafts || !data.draft);

  return projects.sort((firstProject, secondProject) => {
    if (firstProject.data.featured !== secondProject.data.featured) {
      return firstProject.data.featured ? -1 : 1;
    }

    if (firstProject.data.order !== secondProject.data.order) {
      return firstProject.data.order - secondProject.data.order;
    }

    return firstProject.data.title.localeCompare(secondProject.data.title);
  });
}
