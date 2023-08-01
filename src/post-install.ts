import pc from 'picocolors'

console.log(
  pc.green(`${process.env.npm_package_name} v${process.env.npm_package_version} 
  ${pc.italic('successfully built and installed')}
  `)
)