import { create } from "zustand";
import { readMdFile } from "../../lib/posts-md.js";

import path from "path";

const PostPath = path.join(__dirname, "./content/post");
// const NotePath = path.join(__dirname, "./content/notes");
const PostFiles = readMdFile(PostPath);
// const NoteFiles = readMdFile(NotePath);
console.log("markdown files", PostFiles);

const useContentStore = create((set) => ({
  bears: PostFiles as any,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useContentStore;
