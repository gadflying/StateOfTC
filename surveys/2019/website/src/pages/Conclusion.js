import React from 'react'
import { graphql } from 'gatsby'
import TextBlock from 'core/blocks/TextBlock'
import NewsletterBlock from 'core/blocks/NewsletterBlock'
import Layout from 'core/Layout'
import PageHeader from 'core/pages/PageHeader'

const Conclusion = ({ data, ...rest }) => (
    <Layout {...rest}>
        <div>
            <PageHeader showIntro={false} />
            <TextBlock text={data.conclusion.html} />
            {/* hack to avoid error when capturing */}
            <div id="quadrants" />
            <NewsletterBlock />
        </div>
    </Layout>
)

export default Conclusion

export const query = graphql`
    query conclusionByLocale($locale: String!) {
        conclusion: markdownRemark(
            frontmatter: {
                type: { eq: "conclusion" }
                section: { eq: "conclusion" }
                locale: { eq: $locale }
            }
        ) {
            html
        }
    }
`
