import { createForm } from '@formily/core'
import { Field, FormConsumer, FormProvider } from '@formily/react'
import { FormButtonGroup, FormItem, FormLayout, Input, Submit } from '@formily/antd'

const form = createForm()
function Basic() {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="输入框"
          required
          initialValue="hello world"
          decorator={[FormItem]}
          component={[Input]}
      />
      </FormLayout>
      <FormConsumer>
        {
          () => (
            <div className="mb-20px p-5px border-[#666] border-width-1px border-dashed">实时响应: {form.values.input}</div>
          )
        }
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Basic
