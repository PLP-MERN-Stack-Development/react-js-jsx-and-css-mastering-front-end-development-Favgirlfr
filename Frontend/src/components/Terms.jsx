import Card from './Card'

export default function Terms() {
  return (
    <Card title="Terms of Service">
      <p className="text-gray-600 dark:text-gray-300">
        These are sample terms of service for the Task Manager application. Replace
        with your project's actual terms before publishing.
      </p>
      <ol className="mt-4 list-decimal list-inside text-gray-600 dark:text-gray-300">
        <li>Use this application for demo and learning purposes.</li>
        <li>The project owner is not responsible for user data outside this demo.</li>
      </ol>
    </Card>
  )
}
