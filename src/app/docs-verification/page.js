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
        name: "Tata Power Delhi",
        url: "https://www.tatapower-ddl.com/billpay/paybillonline.aspx",
      },
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
      { name: "Haryana DHBVN", url: "https://epayment.dhbvn.org.in/" },
      {
        name: "Tamil Nadu TNEB",
        url: "https://www.tnebnet.org/awp/userRegister?execution=e1s1",
      },
      {
        name: "BSES BYPL",
        url: "https://www.bsesdelhi.com/web/bypl/quick-pay",
      },
      {
        name: "BSES BRPL",
        url: "https://www.bsesdelhi.com/web/brpl/quick-pay",
      },
      {
        name: "Gujarat MGVCL",
        url: "https://mgvcl.co.in:8085/NonRegConBillInfo",
      },
      { name: "UPPCL", url: "https://consumer.uppcl.org/wss/pay_bill_home" },
      {
        name: "Southern Power BillDesk",
        url: "https://payments.billdesk.com/MercOnline/SPDCLController",
      },
      { name: "NDMC", url: "https://ewbilling.ndmc.gov.in/" },
    ],
  },
  {
    title: "Gas Bills",
    links: [
      {
        name: "IGL Prepaid",
        url: "https://webonline.igl.co.in:8077/sap/bc/ui5_ui5/sap/zumcui5/index.html?directPayment2&_ga=2.18921400#page|%7B%22id%22%3A%22onlineRecharge%22%7D|0",
      },
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
        name: "IGL Postpaid",
        url: "https://webonline.igl.co.in:8077/sap/bc/bsp/sap/zumcui5/webcontent/index.html?directPayment&_ga=2.48#page|%7B%22id%22%3A%22instaPayment%22%7D|0",
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
