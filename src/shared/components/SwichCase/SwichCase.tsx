type SwitchCaseValue = string | number | symbol | boolean

export type SwitchCaseProps<T extends SwitchCaseValue> = {
  value: T
  cases: Record<string, React.ReactNode>
  defaultComponent?: React.ReactNode
}

export function SwitchCase<T extends SwitchCaseValue>({
  value,
  cases,
  defaultComponent = null
}: SwitchCaseProps<T>) {
  return cases[String(value)] ?? defaultComponent
}
