import AboutHeader from 'components/about/AboutHeader'
import AboutStory from 'components/about/AboutStory'
import TeamSection from 'components/about/TeamSection'
import Page from 'components/shared/Page'
import React from 'react'

function AboutPage() {
  return (
    <Page title="About - Interno" maxW={"full"} className={"p-0"}>
      <AboutHeader />
      <AboutStory />
      <TeamSection />
    </Page>
  );
}

export default AboutPage
