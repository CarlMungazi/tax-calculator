
const Splash = {
    view() {
        return m('div.avenir',
            m('div.pb5.pt5',
                m('div.tc.ph3',
                    m('h1.mt0.f2.f1-l.fw5.black-90.lh-title.underline', "Tax Bracket Calculator"),
                    m('h2.fw4.f3.black-90.mt3.mb4', "The easy way to find out how much tax you're paying each month"),
                    m('p.f5.lh-copy.fw1', "Calculating your taxes may not be fun (unless number crunching is what you do before breakfast) but we all need to know how much our hard-earned cash is taxed each month."),
                    m('p.f5.lh-copy.fw1', "That is why we’ve created this simple and easy to use calculator which tells you what percentage of your salary is taxable and at what rate it is taxed."),
                    m('p.f5.lh-copy.fw1', "All you have to do is enter your annual salary and the calculator will do the rest (really smiley face)."),
                    m('p.f5.lh-copy.fw1', "Of course, this is not a comprehensive tax breakdown (we would need a LOT more information for that) but it is designed to help you understand how the tax system works."),
                    m('p.f5.lh-copy.fw1', "Yay taxes (smiley face)."),
                )
            )
        )
    },
}

module.exports = Splash