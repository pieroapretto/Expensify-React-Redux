const { addExpense } = require("../actions/expenses");

const add = (a,b) => a + b ;

test('should add two numbers', () => {
    const result = add(2,4);
    if (result !== 6) {
        throw new Error(`You added 2 and 4. The result was ${result}. Expected 6.`)
    }
    expect(result).toBe(6);
});

test('should take expense data and return an expense action', () => {
    const sampleExpense =   {
        description: 'This is a sample test',
        note: 'Sample noises',
        amount: 2500,
        createdAt: 1000
    }

    const sampleAction = addExpense(sampleExpense)
    
    expect(sampleAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...sampleExpense,
            id: expect.any(String)
        }
    })
})