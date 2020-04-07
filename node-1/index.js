const json = {
  "name": 1,
  "items": [
    {
      "name": 2,
      "items": [
        {
          "name": 3,
          "items": [
            {
              "name": 7,
              "items": [
                {
                  "name": 8,
                },
                {
                  "name": 9,
                }
              ]
            }
          ]
        },
        {
          "name": 4
        }
      ]
    },
    {
      "name": 5,
      "items": [
        {
          "name": 6
        }
      ]
    }
  ]
}

const pad = (str) => str.repeat(4)

const padDepth = (length, isLastItem) => ((isLastItem ? ' ' : '│') + pad(' ')).repeat(length)

function tree({ name, items }, depth = 0, isLastNode, root = true, isLastItem) {
  const strName = name.toString()
  console.log(depth ? padDepth(depth - 1, isLastItem) + (isLastNode ? '└' : '├') + pad('─') + strName : strName)
  if (items) {
    items.forEach((item, idx) => tree(item, depth + 1, idx === items.length - 1, false, items && isLastItem ? isLastItem : root && idx === items.length - 1))
  }
}

tree(json)