import { getLocale, getTranslations } from 'next-intl/server';
import { returnCurrentLangId } from '../../../../utils/currentLang';
import ContactForm from './ContactForm'
import Link from "next/link";

async function getData() {
  const t = await getLocale();
  const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/settings/contact-details?Language=${returnCurrentLangId(t)}`, {
    method: 'GET'
  })
  if (!res.ok) {
    return null
  }
  return res.json()
}


const ContactInner = async () => {
  const res = await getData();
  const data = res?.data
  const t = await getTranslations()

  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <ContactForm />
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">{t("NeedAnyHelp")}</span>
                  <h2>{data?.header}</h2>
                  <div className="text">{data?.description}</div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon bg-theme-color2">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>{t("HaveAnyQuestion")}</h6>
                      <Link href="tel:980089850">
                        {data?.phoneNumber}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>{t("WriteEmail")}</h6>
                      <Link href={`mailto:${data?.email}`}>{data?.email}</Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>{t("VisitAnytime")}</h6>
                      <span>{data?.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
