// Partner Payout History & Settlement Statement View
import { showToast } from '../components/Toast.js';
import { playClickTone, playSuccessChime } from '../utils/audio.js';

export function renderPayoutHistoryView(state) {
  const selectedSettlement = state.settlements.find(s => s.id === state.selectedSettlementId);

  return `
    <div class="flex flex-col w-full pb-12 gap-y-6">
      
      <!-- Top Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-[#002218] tracking-tight">Payout History & Settlement Statement</h1>
          <p class="text-xs text-[#717974] mt-0.5">Automated weekly disbursements, commission reconciliations, and GST/TCS tax invoices.</p>
        </div>
        <button id="btn-download-all-statements" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#e2eae5] text-[#12382c] hover:bg-[#edf6f0] text-xs font-bold shadow-xs transition self-start sm:self-auto">
          <span class="material-symbols-outlined text-[18px]">download</span>
          <span>Download All Statements (FY 2026-27)</span>
        </button>
      </div>

      <!-- Financial Metric Quad -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Next Estimated Payout -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Next Estimated Payout</span>
              <span class="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-bold">In Clearance</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹48,250.00</div>
            <p class="text-xs text-[#717974] mt-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#895100]">schedule</span>
              <span>Tomorrow at 10:00 AM</span>
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974]">To HDFC Bank ****4921</span>
            <span class="font-bold text-[#12382c]">Auto-Release</span>
          </div>
        </div>

        <!-- Last Payout Received -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Last Payout Received</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[12px]">check_circle</span>
                <span>Settled</span>
              </span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹1,24,620.00</div>
            <p class="text-xs text-[#717974] mt-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#12382c]">event_available</span>
              <span>Deposited on 20 Oct 2026</span>
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974] font-mono text-[11px] truncate">UTR: HDFCN2629482910</span>
            <span class="material-symbols-outlined text-[16px] text-[#12382c] cursor-pointer hover:opacity-70" title="Copy UTR" onclick="navigator.clipboard.writeText('HDFCN2629482910'); alert('UTR copied to clipboard!');">content_copy</span>
          </div>
        </div>

        <!-- Net Earnings (This Month) -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Net Earnings (Oct)</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">+18.4%</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹3,88,400.00</div>
            <p class="text-xs text-[#717974] mt-1">
              After TastyKart 15% cut, GST & TCS
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100">
            <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden flex">
              <div class="bg-[#12382c] h-full" style="width: 78%;" title="Net Merchant Earnings"></div>
              <div class="bg-[#fd9d1a] h-full" style="width: 15%;" title="Platform Commission"></div>
              <div class="bg-gray-400 h-full" style="width: 7%;" title="GST & Taxes"></div>
            </div>
          </div>
        </div>

        <!-- Commission Tier -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Commission Tier</span>
              <span class="px-2 py-0.5 rounded-full bg-[#e7f0eb] text-[#12382c] text-[11px] font-bold">Standard</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">15.0%</div>
            <p class="text-xs text-[#717974] mt-1">
              Next tier at ₹5,00,000 monthly (12.5%)
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974]">Target: 77.6%</span>
            <span class="font-bold text-[#895100]">₹1,11,600 to unlock</span>
          </div>
        </div>

      </div>

      <!-- Bank Details & Settlement Cycle -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
        
        <!-- Bank Information Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] xl:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-[#edf6f0] flex items-center justify-center text-[#12382c] shrink-0 border border-[#c3ebda]">
              <span class="material-symbols-outlined text-[32px]">account_balance</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-[#002218]">HDFC Bank Limited</h3>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">
                  <span class="material-symbols-outlined text-[12px]">verified</span>
                  <span>Verified Merchant</span>
                </span>
              </div>
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-[#717974]">
                <span>A/C: <strong class="text-[#151d1a] font-mono">5020 0041 8492 4921</strong></span>
                <span>IFSC: <strong class="text-[#151d1a] font-mono">HDFC0001844</strong></span>
                <span>Branch: <strong class="text-[#151d1a]">Main Road, Tekkali</strong></span>
              </div>
            </div>
          </div>
          <button class="px-4 py-2 rounded-xl bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] transition text-xs font-bold" onclick="alert('Bank details locked. Contact TastyKart partner manager to update KYC.');">
            Update Account
          </button>
        </div>

        <!-- Settlement Cadence Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-[#ffdcbc] flex items-center justify-center text-[#683d00] shrink-0">
              <span class="material-symbols-outlined text-[26px]">calendar_today</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#717974]">Payout Cadence</span>
              <h4 class="text-base font-bold text-[#002218]">Every Tuesday</h4>
              <p class="text-xs text-[#717974]">Mon 00:00 to Sun 23:59</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-[#12382c] text-[24px]">sync</span>
        </div>

      </div>

      <!-- Settlement Ledger Table -->
      <div class="bg-white rounded-2xl shadow-sm border border-[#e2eae5] overflow-hidden">
        <div class="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-[#002218]">Settlement Disbursal Ledger</h3>
            <p class="text-xs text-[#717974]">Click any weekly statement row to inspect full tax & deductions breakdown.</p>
          </div>
          <span class="text-xs text-gray-500 font-mono">${state.settlements.length} statements on record</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-[#edf6f0] text-[#717974] font-bold uppercase tracking-wider border-b border-[#e2eae5]">
                <th class="py-3.5 px-4">Statement Cycle</th>
                <th class="py-3.5 px-4">Disbursal Date</th>
                <th class="py-3.5 px-4">Gross Sales</th>
                <th class="py-3.5 px-4">Commission (15%)</th>
                <th class="py-3.5 px-4">Taxes & Deductions</th>
                <th class="py-3.5 px-4">Net Payout</th>
                <th class="py-3.5 px-4 text-center">Status</th>
                <th class="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 font-medium">
              ${state.settlements.map(item => `
                <tr class="settlement-row hover:bg-[#f3fbf6] transition cursor-pointer ${state.selectedSettlementId === item.id ? 'bg-[#edf6f0]/80' : ''}" data-settlement-id="${item.id}">
                  
                  <td class="py-3.5 px-4">
                    <div class="font-bold text-[#002218] text-sm">${item.id}</div>
                    <div class="text-[11px] text-gray-500 font-mono">${item.cyclePeriod}</div>
                  </td>

                  <td class="py-3.5 px-4">
                    <div class="font-semibold text-gray-900">${item.payoutDate}</div>
                    <div class="text-[11px] text-gray-500 font-mono truncate max-w-[140px]">${item.utrNumber}</div>
                  </td>

                  <td class="py-3.5 px-4 font-mono font-bold text-gray-800">
                    ₹${item.grossSales.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>

                  <td class="py-3.5 px-4 font-mono text-red-600">
                    -₹${item.platformCommissionAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>

                  <td class="py-3.5 px-4 font-mono text-gray-600">
                    -₹${(item.gstOnCommission + item.tcsAmount + item.tdsAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>

                  <td class="py-3.5 px-4 font-mono font-bold text-sm text-[#12382c]">
                    ₹${item.netPayout.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>

                  <td class="py-3.5 px-4 text-center">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      item.status === 'settled' ? 'bg-[#c3ebda] text-[#002117]' :
                      item.status === 'processing' ? 'bg-[#fef3c7] text-[#92400e]' :
                      'bg-gray-100 text-gray-600'
                    }">
                      ${item.status.toUpperCase()}
                    </span>
                  </td>

                  <td class="py-3.5 px-4 text-right">
                    <button class="btn-view-statement px-3 py-1.5 rounded-lg bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] text-xs font-bold transition" data-settlement-id="${item.id}">
                      View Details
                    </button>
                  </td>

                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Itemized Settlement Statement Drawer -->
      ${renderSettlementDrawer(selectedSettlement)}

    </div>
  `;
}

function renderSettlementDrawer(item) {
  if (!item) return '';

  return `
    <div class="fixed inset-0 z-[70] modal-backdrop flex justify-end" id="settlement-drawer-backdrop">
      <div class="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform border-l border-gray-200">
        
        <!-- Header -->
        <div class="p-6 bg-[#12382c] text-white flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-bold">${item.id}</span>
              <span class="px-2.5 py-0.5 rounded-full ${item.status === 'settled' ? 'bg-[#c3ebda] text-[#002117]' : 'bg-[#fef3c7] text-[#92400e]'} text-xs font-bold uppercase">
                ${item.status}
              </span>
            </div>
            <p class="text-xs text-[#7ba292] mt-0.5">${item.cyclePeriod} (${item.ordersCount} total orders)</p>
          </div>
          <button id="btn-close-settlement-drawer" class="text-white/80 hover:text-white p-1 rounded-lg">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <!-- Content Statement -->
        <div class="p-6 space-y-5 text-xs text-gray-800 flex-1">
          
          <!-- Bank Disbursement Banner -->
          <div class="p-4 bg-[#f3fbf6] rounded-xl border border-[#c3ebda] space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#002117] uppercase tracking-wider">Disbursement Details</span>
              <span class="text-xs font-bold text-[#12382c]">${item.bankAccount}</span>
            </div>
            <div class="text-[11px] text-[#414845] font-mono">UTR: ${item.utrNumber}</div>
            <div class="text-[11px] text-[#717974]">${item.settledTimestamp}</div>
          </div>

          <!-- Tax Invoice Itemized Calculation -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-100">
              Tax Invoice & Deductions Calculation
            </h4>

            <div class="flex justify-between py-1">
              <span class="text-gray-700">Gross Food Sales (${item.ordersCount} Orders)</span>
              <span class="font-mono font-bold">₹${item.grossSales.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1">
              <span class="text-gray-700">Packaging Charges Reimbursed</span>
              <span class="font-mono font-bold">₹${item.packagingCharges.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600 border-t border-dashed border-gray-200 pt-2">
              <span>Platform Service Fee (${item.platformCommissionRate})</span>
              <span class="font-mono font-bold">-₹${item.platformCommissionAmount.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>GST on Platform Service Fee (18%)</span>
              <span class="font-mono font-bold">-₹${item.gstOnCommission.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>Tax Collected at Source (1% TCS u/s 52)</span>
              <span class="font-mono font-bold">-₹${item.tcsAmount.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>Tax Deducted at Source (1% TDS u/s 194O)</span>
              <span class="font-mono font-bold">-₹${item.tdsAmount.toFixed(2)}</span>
            </div>

            ${item.adjustments ? `
              <div class="flex justify-between py-1 text-red-600">
                <span>Adjustments / Refunds</span>
                <span class="font-mono font-bold">-₹${Math.abs(item.adjustments).toFixed(2)}</span>
              </div>
            ` : ''}

            <!-- Final Net Amount -->
            <div class="p-4 bg-[#12382c] text-white rounded-xl flex items-center justify-between text-sm font-bold mt-4 shadow-sm">
              <span>NET PAYABLE TO BANK</span>
              <span class="text-lg font-mono">₹${item.netPayout.toFixed(2)}</span>
            </div>
          </div>

          <div class="p-3 bg-gray-50 rounded-xl text-[11px] text-gray-500 leading-relaxed border border-gray-200">
            This statement serves as an official Tax Invoice under Rule 46 of CGST Rules 2017. All TDS & TCS credits are credited against your registered GSTIN / PAN.
          </div>

        </div>

        <!-- Actions Footer -->
        <div class="p-6 border-t border-gray-200 bg-white flex items-center gap-3">
          <button id="btn-download-single-invoice" class="flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-2" data-settlement-id="${item.id}">
            <span class="material-symbols-outlined text-[18px]">download</span>
            <span>Download Tax Invoice (PDF / CSV)</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

export function attachPayoutHistoryEvents(state, onStateChange) {
  // Row click or view details
  document.querySelectorAll('.settlement-row, .btn-view-statement').forEach(el => {
    el.addEventListener('click', (e) => {
      const settlementId = el.getAttribute('data-settlement-id');
      state.selectedSettlementId = settlementId;
      playClickTone();
      onStateChange();
    });
  });

  // Close drawer
  const closeBtn = document.getElementById('btn-close-settlement-drawer');
  const backdrop = document.getElementById('settlement-drawer-backdrop');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      state.selectedSettlementId = null;
      onStateChange();
    });
  }
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        state.selectedSettlementId = null;
        onStateChange();
      }
    });
  }

  // Download single invoice
  const downloadSingleBtn = document.getElementById('btn-download-single-invoice');
  if (downloadSingleBtn) {
    downloadSingleBtn.addEventListener('click', () => {
      const sId = downloadSingleBtn.getAttribute('data-settlement-id');
      const item = state.settlements.find(s => s.id === sId);
      if (item) {
        playSuccessChime();
        const csvContent = "data:text/csv;charset=utf-8,"
          + "Statement ID,Period,Gross Sales,Commission 15%,GST 18%,TCS 1%,TDS 1%,Net Payout,UTR,Bank\n"
          + `"${item.id}","${item.cyclePeriod}",${item.grossSales},${item.platformCommissionAmount},${item.gstOnCommission},${item.tcsAmount},${item.tdsAmount},${item.netPayout},"${item.utrNumber}","${item.bankAccount}"\n`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `TastyKart_Tax_Invoice_${item.id}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        showToast(`Tax invoice for ${item.id} downloaded!`);
      }
    });
  }

  // Download all statements
  const downloadAllBtn = document.getElementById('btn-download-all-statements');
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', () => {
      playSuccessChime();
      let csvContent = "data:text/csv;charset=utf-8,Statement ID,Cycle Period,Gross Sales,Commission,Net Payout,Status,UTR\n";
      state.settlements.forEach(s => {
        csvContent += `"${s.id}","${s.cyclePeriod}",${s.grossSales},${s.platformCommissionAmount},${s.netPayout},"${s.status}","${s.utrNumber}"\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "TastyKart_FY2026_All_Settlement_Statements.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast('All settlement statements downloaded (CSV)!');
    });
  }
}
