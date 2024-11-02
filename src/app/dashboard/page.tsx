import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"


export default function Component() {
  // Mock data for the account balance and transactions
  const accountBalance = 5280.42
  const transactions = [
    { id: 1, name: "Amazon.com", amount: -79.99, date: "2023-03-15" },
    { id: 2, name: "Salary Deposit", amount: 3500.00, date: "2023-03-01" },
    { id: 3, name: "Grocery Store", amount: -65.47, date: "2023-02-28" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Bank Account Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${accountBalance.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your last 3 transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {transactions.map((transaction) => (
                <li key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${transaction.name}`} alt={transaction.name} />
                      <AvatarFallback>{transaction.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount >= 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}