import CallToAction from 'components/CallToAction';
import ServicesHeader from 'components/services/ServicesHeader';
import WorkProcess from 'components/services/WorkProcess';
import Page from 'components/shared/Page'


function ServicesPage() {
  return (
    <Page title="Services - Interno" maxW={"full"} className={"p-0"}>
      <ServicesHeader />
      <div className="max-w-[1158px] mx-auto p-4">
        <WorkProcess />
        <CallToAction />
      </div>
    </Page>
  );
}

export default ServicesPage
