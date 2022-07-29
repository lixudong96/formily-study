import { createSchemaField } from '@formily/react'
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd'
import { Button } from 'antd'
import { useCallback } from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const schema = {
  type: 'object',
  properties: {
    aaa: {
      'type': 'string',
      'title': '输入框1',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bbb: {
      'type': 'string',
      'title': '输入框2',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ccc: {
      'type': 'string',
      'title': '输入框3',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ddd: {
      'type': 'string',
      'title': '输入框4',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

const Dialog = () => {
  const handleOpenDialog = useCallback(() => {
    FormDialog('弹窗表单', () => {
      return (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaField schema={schema} />
          <FormDialog.Footer>
            <span className="ml-5px">扩展文案</span>
          </FormDialog.Footer>
        </FormLayout>
      )
    }).forOpen((payload, next) => {
      setTimeout(() => {
        next({
          initialValues: {
            aaa: '123',
          },
        })
      }, 1000)
    }).forConfirm((payload, next) => {
      setTimeout(() => {
        console.log(payload)
        next(payload)
      }, 1000)
    })
      .forCancel((payload, next) => {
        setTimeout(() => {
          console.log(payload)
          next(payload)
        }, 1000)
      })
      .open()
      .then(console.log)
  }, [])
  return (
    <FormDialog.Portal>
      <Button onClick={handleOpenDialog}>点击打开弹窗</Button>
    </FormDialog.Portal>
  )
}

export default Dialog
