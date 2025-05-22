// app/api/getCustomerDisbursement/route.js
import { NextResponse } from 'next/server';
import { getLeadRepaymentInfo } from '@/services/leadsService';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pancard = searchParams.get('pancard');
  console.log("control on repayment: GET => ", process.env);

  if (!pancard) {
    return NextResponse.json({ error: 'Missing pancard' }, { status: 400 });
  }

  try {
    const data = await getLeadRepaymentInfo(pancard);

    if (!data) {
      return NextResponse.json({ error: 'Lead not found or no data available' }, { status: 404 });
    }

    return NextResponse.json({success:true, status:200, data });
  } catch (err) {
    console.error('Database Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
