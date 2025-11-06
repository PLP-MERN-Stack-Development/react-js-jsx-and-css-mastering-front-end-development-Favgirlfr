import Card from './Card'

export default function Privacy() {
  return (
    <Card title="Privacy Policy">
      <p className="text-gray-600 dark:text-gray-300">
        This is a sample privacy policy for the Task Manager application. Replace
        this text with your project's actual privacy policy before publishing.
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
        <li>Data stored locally in your browser (localStorage) is used for tasks.</li>
        <li>No personal data is sent to any external services in this demo app.</li>
      </ul>
    </Card>
  )
}
