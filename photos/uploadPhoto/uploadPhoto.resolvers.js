import { protectResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          const hashtags = caption.match(/#[\w]+/g);
          console.log(hashtags);
        }
      }
    ),
  },
};
