import React from "react";
import { ExternalLink } from "lucide-react";
import Header from "../components/common/Header";
const verificationLinks = [
  {
    title: "Rent Agreements",
    links: [
      { name: "Haryana", url: "https://egrashry.nic.in/verifychallan" },
      {
        name: "Maharashtra",
        url: "https://freesearchigrservice.maharashtra.gov.in/",
      },
      {
        name: "Online Document Search",
        url: "https://freesearchigrservice.maharashtra.gov.in/",
      },
      {
        name: "E-Stamp",
        url: "https://www.shcilestamp.com/eStampIndia/VerifyCertificate.es?rDoAction=VerifyCert",
      },
    ],
  },
  {
    title: "PAN Verification",
    links: [
      {
        name: "CVL KRA",
        url: "https://validate.cvlindia.com/CVLKRAVerification_V1/",
      },
      {
        name: "TRACES (TDS/TCS)",
        url: "https://www.tdscpc.gov.in/app/login.xhtml",
      },
    ],
  },
  {
    title: "Electricity Bills",
    links: [
      {
        name: "Tata Power Mumbai",
        url: "https://pgi.billdesk.com/pgidsk/pgmerc/tatapwr/TATAPWRDetails.jsp",
      },
      {
        name: "Maharashtra MSEB",
        url: "https://wss.mahadiscom.in/wss/wss?uiActionName=getHome&Lang=English",
      },
      {
        name: "MSEB (View Pay Bill)",
        url: "https://wss.mahadiscom.in/wss/wss?uiActionName=getViewPayBill",
      },
      {
        name: "Tata Power Delhi",
        url: "https://www.tatapower-ddl.com/billpay/paybillonline.aspx",
      },
      { name: "Tata Power Payment", url: "https://www.tatapower.com/" },
      {
        name: "Punjab PSPCL",
        url: "https://billpayment.pspcl.in/pgBillPay.aspx?uc=BillPay",
      },
      {
        name: "Haryana UHBVN",
        url: "https://epayment.uhbvn.org.in/b2cpaybill.aspx",
      },
      {
        name: "Southern Power (APSPDCL)",
        url: "https://apspdcl.in/digital_payment.jsp",
      },
      {
        name: "Southern Power BillDesk",
        url: "https://payments.billdesk.com/MercOnline/SPDCLController",
      },
      { name: "Haryana DHBVN", url: "https://epayment.dhbvn.org.in/" },
      {
        name: "Tamil Nadu TNEB",
        url: "https://www.tnebnet.org/awp/userRegister?execution=e1s1",
      },
      { name: "TANGEDCO Online Payment", url: "https://www.tnebnet.org/" },
      {
        name: "BSES BYPL",
        url: "https://www.bsesdelhi.com/web/bypl/quick-pay",
      },
      {
        name: "BSES Rajdhani",
        url: "https://www.bsesdelhi.com/web/brpl/quick-pay",
      },
      {
        name: "BSES BYPL View Bill",
        url: "http://byplws.bsesdelhi.com:8086/frmViewBill.aspx",
      },
      {
        name: "Gujarat MGVCL",
        url: "https://mgvcl.co.in:8085/NonRegConBillInfo",
      },
      { name: "PGVCL", url: "https://www.pgvcl.com/" },
      { name: "UPPCL", url: "https://consumer.uppcl.org/wss/pay_bill_home" },
      { name: "NDMC", url: "https://ewbilling.ndmc.gov.in/" },
      { name: "BESCOM", url: "https://bescom.org/" },
      { name: "JVVNL", url: "https://www.bijlimitra.com/" },
      { name: "MPEB", url: "https://www.mpez.co.in/" },
      { name: "CESC", url: "https://www.cesc.co.in/" },
      { name: "TGSPDCL", url: "https://tgspdcl.in/" },
      { name: "::APCPDCLAPPG::", url: "https://apcpdcl.in/" },
    ],
  },
  {
    title: "Gas Bills",
    links: [
      {
        name: "IGL Prepaid",
        url: "https://webonline.igl.co.in:8077/sap/bc/ui5_ui5/sap/zumcui5/index.html?directPayment2",
      },
      {
        name: "IGL Postpaid",
        url: "https://webonline.igl.co.in:8077/sap/bc/bsp/sap/zumcui5/webcontent/index.html?directPayment",
      },
      { name: "Welcome to IGL", url: "https://www.igl.co.in/" },
      {
        name: "Indian Oil",
        url: "https://cx.indianoilcgd.com/portal/Pay_bill.aspx",
      },
      { name: "HP Gas", url: "https://myhpgas.in/myHPGas/QuickPay.aspx" },
      {
        name: "Gujarat Gas",
        url: "https://applications.gujaratgas.com/Onlinepayment/frmBillPay.aspx",
      },
      {
        name: "Mahanagar Gas",
        url: "https://payments.billdesk.com/MercOnline/mglBillPay/mgl_billpayment.html",
      },
      {
        name: "Adani Gas",
        url: "https://www.adanigas.com/myaccount/quick-bill-pay",
      },
    ],
  },
  {
    title: "Phone Bills",
    links: [
      { name: "Airtel", url: "https://www.airtel.in/postpaid-bill-pay" },
      { name: "MTNL", url: "https://billalert.mtnl.net.in/pay/login.asp" },
      { name: "BSNL", url: "https://portal.bsnl.in/myportal/qrcf" },
      {
        name: "Vodafone (Vi)",
        url: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      },
    ],
  },
  {
    title: "WiFi Bills",
    links: [
      { name: "Airtel", url: "https://www.airtel.in/broadband-bill-pay" },
      {
        name: "ACT",
        url: "https://selfcare.actcorp.in/payments/external-bills",
      },
      { name: "Netpay", url: "https://netpay.netplus.co.in/index1.php" },
      { name: "Netplus", url: "https://www.netplus.co.in/pay-bill" },
      { name: "Asianet", url: "https://payments.asianet.co.in/" },
      {
        name: "Hathway",
        url: "https://isp.hathway.net:7404/selfcare_beta/index.php?r=qp/enterdetails",
      },
    ],
  },
  {
    title: "Water Bills",
    links: [{ name: "MCG Water Bill", url: "https://www.mcg.gov.in/" }],
  },
  {
    title: "Other Useful Links",
    links: [
      { name: "GST Services", url: "https://www.gst.gov.in/" },
      { name: "Whois Lookup", url: "https://www.whois.com/" },
      {
        name: "Translate JPG Hindi",
        url: "https://openl.io/translate/jpg/hindi",
      },
      { name: "ZaubaCorp", url: "https://www.zaubacorp.com/" },
      { name: "Read PDF Metadata", url: "https://pdfyeah.com/" },
      { name: "SNP Technical", url: "http://www.snptechnical.co.in" },
    ],
  },
  {
    title: "Identity Verification",
    links: [
      {
        name: "Download Aadhaar (UIDAI)",
        url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar",
      },
    ],
  },
];

export default function DocumentVerificationPage() {
  return (
    <>
      <Header title=" Document Verification Links" />
      <div className="p-4 md:p-10 max-w-5xl mx-auto text-[#1D3E50]">
        <p className="text-lg mb-8 text-center text-gray-600">
          Select from the services below to verify or pay bills related to rent,
          utilities, PAN, and more.
        </p>

        <div className="space-y-8">
          {verificationLinks.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-blue-50 border border-gray-200 rounded-xl p-4 shadow-sm transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
