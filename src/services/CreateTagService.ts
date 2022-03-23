// import { getCustomRepository } from "typeorm";
// import { TagsRepositories } from "../repositories/TagsRepositories";

// class CreateTagService {
//     async execute(name: string) {
//         const tagRepositories = getCustomRepository(TagsRepositories);
        
//         if (!name) {
//             throw new Error("Incorrect name!");
//         }
        
//         const tagAlreadyExists = await tagRepositories.findOne({
//             name,
//         })

//         if (tagAlreadyExists) {
//             throw new Error("Tag already exists!");
//         }

//         const tag = tagRepositories.create({
//             name
//         })

//         await tagRepositories.save(tag);

//         return tag;
//     }
// }

// export { CreateTagService }

import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name!");
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };