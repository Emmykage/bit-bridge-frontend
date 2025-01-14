const splitString = (provider) => {
  const image = provider?.split(" ")[0].toLowerCase() || provider?.split("-")[0].toLowerCase() || provider
  console.log(image)

  return image
}

export {splitString}