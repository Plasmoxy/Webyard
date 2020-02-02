import { createUser } from "./AsyncFactoryUser"
import { AsyncInitUser } from "./ClassAsyncInitUser"

async function testAsyncUserClass() {
  const t = await new AsyncInitUser().init("Seb", 13)
  await t.greet()
  await t.grow()
  await t.greet()
}

async function testAsyncFactory() {
  const t = await createUser("Seb", 18)
  t.pront()
  t.incAge()
  t.pront()

  console.log(t.localProperty)
  t.incLocalProperty()
  console.log(t.localProperty) // nope doesnt work
}

async function main() {
  await testAsyncUserClass()
}

main().catch(e => console.log(e))
