
const Splash = {
    view() {
        return m('div.avenir',
            m('div.pb5.pt5',
                m('div.tc.ph3',
                    m('h1.mt0.f2.f1-l.fw5.black-90.lh-title.underline', "Tax Bracket Calculator"),
                    m('h2.fw4.f3.black-90.mt3.mb4', "The easy way to find out how much tax you're paying each month"),
                    m('div.pl3.pr3.tl',
                        m('p.f5.lh-copy.fw1', "Calculating your taxes may not be fun (unless number crunching is what you do before breakfast) but we all need to know how much our hard-earned cash is taxed each month. That is why we’ve created this simple and easy to use calculator which tells you what percentage of your salary is taxable and at what rate it is taxed."),
                        m('p.f5.lh-copy.fw1', "All you have to do is enter your annual salary and the calculator will do the rest (really smiley face). Of course, this is not a comprehensive tax breakdown (we would need a LOT more information for that) but it is designed to help you understand how the tax system works."),
                        m('p.f5.lh-copy.fw1', "Yay taxes (smiley face).")
                    )
                ),
                m('div.mw5.mw7-ns.center.pa3.ph5-ns',
                    m('fieldset.cf.bn.ma0.pa0',
                        m('div.cf',
                            m('label.pa0.fw4.f7.mb1.black-80.db[for="salary"]','Enter your salary below'),
                            m('input.f6.f5-l.input-reset.fl.black-80.bg-white.pa-b.lh-solid.w-100.w-75-m.w-80-l.ba.br2-ns.br--left-ns[placeholder="Your Salary"][type="number"][name="salary][id="salary]'),
                            m('input.f6.f5-l.button-reset.fl.pv3.tc.bn.bg-animate.bg-black-70.hover-bg-black.white.pointer.w-100.w-25-m.w-20-l.br2-ns.br--right-ns.ba[type="submit"][value=Submit]')
                        )
                    )
                )
            )
        )
    },
}

module.exports = Splash