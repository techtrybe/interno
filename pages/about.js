import AboutHeader from 'components/about/AboutHeader'
import AboutStory from 'components/about/AboutStory'
import Page from 'components/shared/Page'
import React from 'react'

function AboutPage() {
  return (
    <Page title='About - Interno' className={"p-0"} maxW={"full"}>
        <AboutHeader />
        <AboutStory />
    </Page>
  )
}

export default AboutPage
