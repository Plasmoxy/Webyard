
export const createUser = async (name: string, age: number) => {
  
  let localProperty = 4

  return {
    name, age, localProperty,
    pront() {
      console.log("User " + name + " " + age)
    },

    incAge() {
      age++
    },

    incLocalProperty() {
      localProperty++ // THIS DOESNT WORK!!!! localProperty is now copied and the function does not point to the right property
    }
  }
}

export type User = ReturnType<typeof createUser> extends Promise<infer T> ? T : never