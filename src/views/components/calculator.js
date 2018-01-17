import Accounting from 'accounting'

const Calculator = {
    oninit (vnode) {
      vnode.state.allowance = 11500
      vnode.state.grossSalary = null
      vnode.state.taxBand = null
      vnode.state.totalTax = null
      vnode.state.taxableIncome = null

      vnode.state.calcaluteTax = function calcaluteTax() {
        if (vnode.state.grossSalary === null) return

        if (vnode.state.grossSalary < vnode.state.allowance) {
            vnode.state.taxBand = "Personal Allowance",
            vnode.state.taxableIncome = 0
            vnode.state.totalTax = 0
        } else if (vnode.state.grossSalary > vnode.state.allowance && vnode.state.grossSalary < 45001) {
            vnode.state.taxBand = "Basic Rate",
            vnode.state.taxableIncome = vnode.state.grossSalary - vnode.state.allowance
            vnode.state.totalTax = (20 / 100) * vnode.state.taxableIncome
        } else if (vnode.state.grossSalary > 45000 && vnode.state.grossSalary < 149999) {
            let bandBasic
            let bandHigher
            vnode.state.taxBand = "Higher Rate",
            vnode.state.taxableIncome = vnode.state.grossSalary - vnode.state.allowance

            bandBasic = (20 / 100) * 33500
            bandHigher = (40 / 100) * (vnode.state.taxableIncome - 33500)

            vnode.state.totalTax = bandBasic + bandHigher
        } else if (vnode.state.grossSalary > 149999) {
            let bandBasic
            let bandHigher
            let bandAdditional
            vnode.state.taxBand = "Additional Rate",
            vnode.state.taxableIncome = vnode.state.grossSalary

            bandBasic = (20 / 100) * 33500
            bandHigher = (40 / 100) * (vnode.state.taxableIncome - 43500)
            bandAdditional = (45 / 100) * (vnode.state.taxableIncome - 150000)

            vnode.state.totalTax = [bandBasic, bandHigher, bandAdditional].reduce((accumulator, currentValue) => accumulator + currentValue)
        }
      }
    },
    view (vnode) {
        return m('div.ph3',
            m('form.cf.bn.mt5.mb3.pa0', {
              onsubmit: function (e) {
                e.preventDefault()
              }
            },
              m('label.gold-3.pa0.fw4.f7.mb1.black-80.db[for="salary"]', 'Enter your salary below'),
              m('input[placeholder="34000"][type="number"][min="1"][step="1"][name="salary][id="salary].b--gold-3.f6.f5-l.input-reset.fl.black-80.bg-white.pa-b.lh-solid.w-100.w-75-m.w-80-l.ba.br2-ns.br--left-ns', {
                oninput: m.withAttr("value", (value) => {
                  vnode.state.grossSalary = value
                }),
                value: vnode.state.grossSalary,
              }),
              m('input[type="submit"][value=Submit].f6.f5-l.button-reset.fl.pv3.tc.bn.bg-animate.bg-gold-3.white.pointer.w-100.w-25-m.w-20-l.br2-ns.br--right-ns.ba', {
                onclick: function (e) {
                  e.preventDefault()
                  vnode.state.calcaluteTax()
                },
              })
            ),
            m('div.pa3',
              m('p.fw4.f3.black-90.mt3.mb1.bb-2.b--light-blue', "Breakdown"),
              m('div.flex.justify-between',
                m('p.fw4.f5.black-90', "Tax Band:"),
                m('p.fw4.f5.black-90', vnode.state.taxBand),
              ),
              m('div.flex.justify-between',
                m('p.fw4.f5.black-90', "Taxable Income:"),
                m('p.fw4.f5.black-90', Accounting.formatMoney(vnode.state.taxableIncome, "£")),
              ),
              m('div.flex.justify-between',
                m('p.fw4.f5.black-90', "Tax Due:"),
                m('p.fw4.f5.black-90', Accounting.formatMoney(vnode.state.totalTax, "£")),
              )
            )
        )
    }
}

module.exports = Calculator