import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
const filePath = 'nacos.yaml'

export const getNacosBaseInfo = () => {
  const nacosBaseInfo = yaml.load(readFileSync(filePath).toString())?.nacos
  console.log(nacosBaseInfo)
  return nacosBaseInfo
}