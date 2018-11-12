import { gql } from 'apollo-boost'

export const getHello = gql`
    {
        hello
    }
`

export const updateTextM = gql`
    mutation UpdateText($text: String) {
        updateText(hello: $text) {
            hello
        }
    }`