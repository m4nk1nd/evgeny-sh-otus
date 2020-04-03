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
            },
            {
              "name": 8,
            },
            {
              "name": 9,
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

const PAD_SPACE_LENGTH = 4

const pad = (length, str) => str.repeat(length)

const padDepth = (length, sign) => ((sign ? ' ' : '│') + pad(PAD_SPACE_LENGTH, ' ')).repeat(length)

function tree({ name, items }, depth = 0, isLast, root = true, sign) {
  const strName = name.toString()
  console.log(depth ? padDepth(depth - 1, sign) + (isLast ? '└' : '├') + pad(PAD_SPACE_LENGTH, '─') + strName : strName)
  if (items) {
    items.forEach((item, idx) => tree(item, depth + 1, idx === items.length - 1, false, items && sign ? sign : root && idx === items.length - 1))
  }
}

tree(json)