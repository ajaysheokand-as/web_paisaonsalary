// services/leadsService.js
import { getFullRepaymentDetails } from "@/db/helper/repayment";
import { getLeads } from "@/db/models/leadsModel";

export async function getLeadRepaymentInfo(pancard) {
  const lead = await getLeads({ 
    where: { pancard },
    limit: 1,
    orderBy: 'created_on',
    order: 'DESC',
    single: true
  });
  console.log("lead for pancard: ",pancard,lead)
  const leadID = lead?.lead_id;

  if (!leadID) return null;

  const repaymentInfo = await getFullRepaymentDetails(leadID);

  return repaymentInfo || null;
}
