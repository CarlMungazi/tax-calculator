import Calculator from './components/calculator'

const Splash = {
    view() {
        return m('div.avenir',
            m('div.pb5.pt5.mw7-ns.center.ph5-ns',
                m('div.tc.ph3',
                    m('h1.mt0.mb0.f2.f1-l.fw5.black-90.lh-title.bb-3.blue-4', "Tax Bracket Calculator"),
                    m('h2.fw4.f3.black-90.mt3.mb4.blue-4', "The easy way to work out how much tax you're paying each month"),
                    m('div.pl3.pr3.tl',
                        m('p.f5.lh-copy.fw1', "Calculating your taxes may not be fun (unless number crunching is your idea of a crazy Friday night) but we all need to know how much of our hard-earned cash is taxed each month. That is why we’ve created this simple and easy to use calculator which tells you how much of your salary is taxable."),
                        m('p.f5.lh-copy.fw1', "All you have to do is enter your annual salary and the calculator will do the rest. Of course, this is not a comprehensive tax breakdown (we would need a LOT more information for that) but it is designed to give you an idea of how much tax you pay.")
                    )
                ),
                m(Calculator)
            )
        )
    },
}

module.exports = Splash