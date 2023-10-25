@Library('JenkinsLibs@master') _

/*构建参数设置 */
proJectPrames = [
  extendedChoice(name: 'choiceProjects', type: 'PT_CHECKBOX', description: '请勾选所要发布的项目模块', quoteValue: false, saveJSONParameterToFile: false, 
        value: 'cmn-auth-bff', 
        descriptionPropertyValue: 'cmn-auth-bff', 
        visibleItemCount: 3, multiSelectDelimiter: ',', defaultValue: 'cmn-auth-bff'),
]
proJectPrames.addAll(ciParames())
properties([parameters(proJectPrames)])
//runJavaPipeline() 
runNpm14Pipeline()
