import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("tagline");
    t.string("email");
    t.string("objective");
    t.url("github", (bio) => new URL(bio.github));
    t.url("website", (bio) => new URL(bio.website));
    t.url("linkedin", (bio) => new URL(bio.linkedin));
  },
});
