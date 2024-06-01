import { Account } from "../src/Account"
import { TimeStampBuilderMock } from "./TimeStampBuilderMock"

const timeStampBuilderMock = new TimeStampBuilderMock()
describe('test Account', () => {

  beforeEach(() => {

  }

  )
  test('account Exist', () => {
    // Given
    const account = new Account(timeStampBuilderMock)

    //when 
    console.log(account)

    //then
    expect(account).toBeDefined()

  })

  test('printStatement return the columns headers when any movement has be made', () => {
    // Given
    const account = new Account(timeStampBuilderMock)

    //when 
    const result = account.printStatement()

    //then
    expect(result).toBe('Date           Amount     Balance')

  })

  test('deposit(int) should accept a positive integer an update the statement', () => {
    // Given
    const account = new Account(timeStampBuilderMock)
    timeStampBuilderMock.mockDate(5, 5, 2023)
    //when 
    const result = account.deposit(1)
    const statement = account.printStatement()

    //then
    expect(result).toBe(undefined)
    expect(statement).toBe('Date           Amount     Balance\n05/05/2023    1 1')

  })

  test('deposit(int) should accept a positive integer an update the statement when is call twice', () => {
    // Given
    const account = new Account(timeStampBuilderMock)
    timeStampBuilderMock.mockDate(5, 5, 2023)
    //when 
    account.deposit(1)
    account.deposit(1)
    const statement = account.printStatement()

    //then
    expect(statement).toBe('Date           Amount     Balance\n05/05/2023    1 1\n05/05/2023    1 2')

  })
})
