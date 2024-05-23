import { Account } from "../src/Account"

describe('test Account', () => {

  test('account Exist', () => {
    // Given
    const account = new Account()

    //when 
    console.log(account)

    //then
    expect(account).toBeDefined()

  })
})
