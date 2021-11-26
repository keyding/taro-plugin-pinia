import * as path from 'path'
import {IPluginContext} from '@tarojs/service'

export default (ctx: IPluginContext) => {
    ctx.modifyWebpackChain(({chain}) => {
        const {runOpts, helper} = ctx
        const {options} = runOpts

        if (options.platform !== helper.PLATFORMS.H5) {
            chain.plugin('providerPlugin').tap(args => {
                return [{
                    ...(args[0] || {}),
                    HTMLAnchorElement: [path.resolve(__dirname, './constructor.js'), 'HTMLAnchorElement']
                }]
            })
        }

        chain.module
            .rule("mjs")
            .test(/\.mjs$/)
            .type("javascript/auto")
            .include.add(/node_modules/)
            .end();
    })
}
