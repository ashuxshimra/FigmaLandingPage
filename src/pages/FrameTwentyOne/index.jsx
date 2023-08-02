import React from "react";

import { Button, Img, Line, List, Text } from "components";

const FrameTwentyOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="h-[1080px] md:h-[1367px] sm:h-[1395px] md:px-5 relative w-full">
            <Img
              className="h-[1080px] m-auto object-cover w-full"
              src="images/img_nftmarketplac.png"
              alt="nftmarketplac"
            />
            <div className="absolute bg-black-900_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[60px] w-full">
              <div className="flex flex-col md:gap-10 gap-[124px] items-center justify-start w-full">
                <header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between pb-5 pt-10 md:px-10 sm:px-5 px-[100px] w-full">
                  <div className="flex flex-col font-inter items-center justify-start">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-yellow-800 uppercase"
                      size="txtInterBold44"
                    >
                      <span className="text-orange-400 font-roboto font-bold">
                        Meta
                      </span>
                      <span className="text-white-A700 font-roboto font-bold">
                        voeux
                      </span>
                    </Text>
                  </div>
                  <ul className="flex md:flex-1 md:flex-col flex-row font-poppins gap-[53.33px] md:hidden items-center justify-center px-[5.33px] py-[10.67px] w-auto md:w-full common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="hover:font-semibold text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.33px]"
                      >
                        <Text size="txtPoppinsSemiBold24">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="hover:font-semibold text-2xl md:text-[22px] hover:text-white-A700 text-white-A700_bf sm:text-xl tracking-[1.33px]"
                      >
                        <Text size="txtPoppinsMedium24">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="hover:font-semibold text-2xl md:text-[22px] hover:text-white-A700 text-white-A700_bf sm:text-xl tracking-[1.33px]"
                      >
                        <Text size="txtPoppinsMedium24">Services</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="hover:font-semibold text-2xl md:text-[22px] hover:text-white-A700 text-white-A700_bf sm:text-xl tracking-[1.33px]"
                      >
                        <Text size="txtPoppinsMedium24">News</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="hover:font-semibold text-2xl md:text-[22px] hover:text-white-A700 text-white-A700_bf sm:text-xl tracking-[1.33px]"
                      >
                        <Text size="txtPoppinsMedium24">Contact</Text>
                      </a>
                    </li>
                  </ul>
                  <Button className="bg-gradient  capitalize cursor-pointer font-poppins font-semibold min-w-[203px] py-3.5 rounded-lg text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                    Get Started
                  </Button>
                </header>
                <div className="flex flex-col md:gap-10 gap-[132px] items-center justify-start w-[84%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-start justify-start mb-0.5 w-auto md:w-full">
                      <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
                        <Text
                          className="leading-[78.00px] max-w-[905px] md:max-w-full md:text-5xl text-6xl text-white-A700"
                          size="txtInterBold60"
                        >
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            From{" "}
                          </span>
                          <span className="text-orange-400 font-poppins text-left font-semibold">
                            Games
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            {" "}
                            to{" "}
                          </span>
                          <span className="text-orange-400 font-poppins text-left font-semibold">
                            Defi
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            ,{" "}
                          </span>
                          <span className="text-orange-400 font-poppins text-left font-semibold">
                            NFTs
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            {" "}
                            to{" "}
                          </span>
                          <span className="text-orange-400 font-poppins text-left font-semibold">
                            Polygon chains
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            {" "}
                            along with{" "}
                          </span>
                          <span className="text-orange-400 font-poppins text-left font-semibold">
                            Crypto Exchange
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            , All in one!
                          </span>
                        </Text>
                        <Text
                          className="leading-[36.00px] max-w-[905px] md:max-w-full text-2xl md:text-[22px] text-white-A700_cc sm:text-xl"
                          size="txtPoppinsRegular24"
                        >
                          Metavoex offer a diverse range of cutting-edge DApp
                          products, all integrated within our thriving
                          blockchain ecosystem. Join us in shaping the
                          decentralized future.
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Img
                          className="h-[60px] rounded-md w-[205px]"
                          src="images/img_appledarkdownloadsvg.svg"
                          alt="appledarkdownlo"
                        />
                        <Img
                          className="h-[60px] rounded-md w-[205px]"
                          src="images/img_appledarkdownloadsvg.svg"
                          alt="androiddarkdown"
                        />
                      </div>
                    </div>
                    <div className="md:h-[463px] h-[520px] relative w-[33%] md:w-full">
                      <div className="absolute bottom-[0] md:h-[461px] h-[469px] p-1 right-[0] rotate-[-14deg] w-[59%]">
                        <Img
                          className="h-[461px] m-auto object-cover w-[97%]"
                          src="images/img_iphone12proclay.png"
                          alt="iphone12proclay"
                        />
                        <Img
                          className="absolute h-[439px] inset-[0] justify-center m-auto object-cover w-[89%]"
                          src="images/img_screeniphone12.png"
                          alt="screeniphoneTwelve"
                        />
                      </div>
                      <div className="absolute md:h-[463px] h-[470px] left-[0] p-[3px] rotate-[14deg] top-[0] w-3/5">
                        <Img
                          className="h-[463px] m-auto object-cover w-[92%]"
                          src="images/img_iphone12proclay_463x282.png"
                          alt="iphone12proclay_One"
                        />
                        <Img
                          className="absolute h-[440px] inset-[0] justify-center m-auto object-cover w-[83%]"
                          src="images/img_screeniphone12_440x254.png"
                          alt="screeniphoneTwelve_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_33 border-4 border-solid flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1600px] orange_400_7f_orange_400_7f_01_border md:px-10 px-12 sm:px-5 py-8 rounded-[58px] w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-white-A700 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Games
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-white-A700 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      NFT’s
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-white-A700 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Defi
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-white-A700 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Polygon chains
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-white-A700 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Crypto Exchange
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1920px] p-40 md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between max-w-[1600px] mx-auto w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-start justify-center w-auto md:w-full">
                <div className="flex flex-col items-start justify-center w-auto md:w-full">
                  <Text
                    className="leading-[48.00px] max-w-[820px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-800"
                    size="txtPoppinsMedium28"
                  >
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Forem ipsum dolor sit amet, consectetur elit. Forem
                    ipsum dolor sit amet, consectetur adipiscing elit. amet,
                    consectetur adipiscing elit.
                  </Text>
                </div>
                <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[220px] py-3.5 rounded-lg text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                  Explore more
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[712px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 border-2 border-gray-700 border-solid flex flex-1 flex-col gap-8 h-[300px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                      <Img
                        className="h-16 md:h-auto object-cover w-16"
                        src="images/img_console.png"
                        alt="console"
                      />
                      <div className="flex flex-col gap-3 h-[152px] md:h-auto items-center justify-center w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center uppercase w-auto"
                          size="txtPoppinsMedium32"
                        >
                          Games
                        </Text>
                        <Text
                          className="leading-[23.00px] max-w-[292px] md:max-w-full text-base text-center text-gray-800"
                          size="txtPoppinsMedium16"
                        >
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-700 border-solid flex flex-1 flex-col gap-8 h-[300px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                      <Img
                        className="h-16 md:h-auto object-cover w-16"
                        src="images/img_marketplace.png"
                        alt="marketplace"
                      />
                      <div className="flex flex-col gap-3 h-full items-center justify-center w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                          size="txtPoppinsMedium32"
                        >
                          NFT marketplace
                        </Text>
                        <Text
                          className="leading-[23.00px] max-w-[292px] md:max-w-full text-base text-center text-gray-800"
                          size="txtPoppinsMedium16"
                        >
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-700 border-solid flex flex-1 flex-col gap-8 h-[300px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                      <Img
                        className="h-16 md:h-auto object-cover w-16"
                        src="images/img_wallet.png"
                        alt="wallet"
                      />
                      <div className="flex flex-col gap-3 h-full items-center justify-center w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                          size="txtPoppinsMedium32"
                        >
                          Wallet
                        </Text>
                        <Text
                          className="leading-[23.00px] max-w-[292px] md:max-w-full text-base text-center text-gray-800"
                          size="txtPoppinsMedium16"
                        >
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-700 border-solid flex flex-1 flex-col gap-8 h-[300px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                      <Img
                        className="h-16 md:h-auto object-cover w-16"
                        src="images/img_ethereum.png"
                        alt="ethereum"
                      />
                      <div className="flex flex-col gap-3 items-center justify-center w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                          size="txtPoppinsMedium32"
                        >
                          Crypto Exchange
                        </Text>
                        <Text
                          className="leading-[23.00px] max-w-[292px] md:max-w-full text-base text-center text-gray-800"
                          size="txtPoppinsMedium16"
                        >
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-col items-start justify-start max-w-[1920px] md:px-10 px-40 sm:px-5 py-[100px] w-full">
            <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-center max-w-[1600px] mx-auto w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[68px] text-gray-700 w-auto"
                  size="txtInterBold68"
                >
                  <span className="text-white-A700 font-inter text-left font-bold">
                    Our
                  </span>
                  <span className="text-gray-800_01 font-inter text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-orange-400 font-inter text-left font-bold">
                    Platforms
                  </span>
                </Text>
                <Text
                  className="leading-[42.00px] max-w-[1449px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-400"
                  size="txtPoppinsRegular28"
                >
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center max-w-[1600px] w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                  <div className="bg-white-A700 border-8 border-solid border-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 sm:pr-5 pr-[60px] rounded-[18px] w-full">
                    <div className="bg-gray-400 flex md:flex-1 flex-col items-start justify-start w-[52%] md:w-full">
                      <Img
                        className="h-[433px] md:h-auto object-cover w-[93%]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-[38px] md:text-[44px] text-[52px] text-black-900 w-auto"
                        size="txtInterSemiBold52"
                      >
                        DApp
                      </Text>
                      <Text
                        className="leading-[40.00px] max-w-[403px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border-8 border-solid border-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-10 sm:px-5 rounded-[18px] w-full">
                    <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-[38px] md:text-[44px] text-[52px] text-black-900 w-auto"
                        size="txtInterSemiBold52"
                      >
                        NFT Marketplace
                      </Text>
                      <Text
                        className="leading-[40.00px] max-w-[401px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </Text>
                    </div>
                    <Img
                      className="h-[327px] md:h-auto mr-[17px] md:mt-0 my-[13px] object-cover"
                      src="images/img_image4.png"
                      alt="imageFour"
                    />
                  </div>
                </div>
                <div className="rotate-[deg] bg-white-A700 border-8 border-solid border-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[99px] items-center justify-start pb-[86px] rotate-[90deg] rounded-[18px] w-[31%] md:w-full">
                  <Img
                    className="h-[448px] sm:h-auto object-cover rounded-tl-[18px] rounded-tr-[18px] w-full"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="rotate-[--90deg] sm:text-[38px] md:text-[44px] text-[52px] text-black-900 w-auto"
                      size="txtInterSemiBold52"
                    >
                      DeFi
                    </Text>
                    <Text
                      className="rotate-[--90deg] leading-[40.00px] max-w-[400px] md:max-w-full rotate-[-90deg] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsMedium24Gray800"
                    >
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-start justify-start pb-[120px] pt-[100px] md:px-10 px-40 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1600px] mx-auto w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[68px] text-transparent w-auto"
                size="txtInterBold68Orange400"
              >
                <span className="text-gray-700 font-inter text-left font-bold">
                  Top rated
                </span>
                <span className="text-orange-400 font-inter text-left font-bold">
                  {" "}
                  Crypto Currency
                </span>
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start max-w-[1600px] w-full">
                <List
                  className="flex flex-col gap-10 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-between w-[67%] md:w-full">
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-yellow-A700 flex h-[72px] items-center justify-center p-[17px] rounded-[50%] w-[72px]">
                          <Img src="images/img_compute.svg" alt="computer" />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Dogecoin
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $0.079
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                              size="txtPoppinsMedium22"
                            >
                              DOGE
                            </Text>
                            <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                              +1.86%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-indigo-A200 flex h-[72px] items-center justify-center p-3.5 rounded-[50%] w-[72px]">
                          <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Ethereum
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $1877.33
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                              size="txtPoppinsMedium22"
                            >
                              ETH
                            </Text>
                            <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[85px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                              +5.21%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900 flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                      <Button className="bg-yellow-900 flex h-[72px] items-center justify-center p-4 rounded-[50%] w-[72px]">
                        <Img src="images/img_ticket.svg" alt="ticket" />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                            size="txtPoppinsSemiBold30"
                          >
                            Bitcoin
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtPoppinsMedium24WhiteA700"
                          >
                            $29490.80
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                            size="txtPoppinsMedium22"
                          >
                            BTC
                          </Text>
                          <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[84px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                            +137 %
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-between w-[67%] md:w-full">
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-pink-500 flex h-[72px] items-center justify-center p-[13px] rounded-[50%] w-[72px]">
                          <Img src="images/img_user.svg" alt="user" />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Polkadot
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $25.79
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                              size="txtPoppinsMedium22"
                            >
                              DOT
                            </Text>
                            <Button className="bg-red-A700_3f cursor-pointer font-medium leading-[normal] min-w-[89px] py-[5px] rounded-[5px] text-[17.01px] text-center text-red-A700">
                              -5.56%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-gray-400_01 flex h-[72px] items-center justify-center p-[19px] rounded-[50%] w-[72px]">
                          <Img src="images/img_airplane.svg" alt="airplane" />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Litecoin
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $91.19
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                              size="txtPoppinsMedium22"
                            >
                              LTC
                            </Text>
                            <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                              +1.86%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900 flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                      <Button className="bg-pink-500 flex h-[72px] items-center justify-center p-[13px] rounded-[50%] w-[72px]">
                        <Img src="images/img_user.svg" alt="user_One" />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                            size="txtPoppinsSemiBold30"
                          >
                            Polkadot
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtPoppinsMedium24WhiteA700"
                          >
                            $0.079
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                            size="txtPoppinsMedium22"
                          >
                            DOT
                          </Text>
                          <Button className="bg-red-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-red-A700">
                            +1.86%
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-between w-[67%] md:w-full">
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-blue_gray-900_01 flex h-[72px] items-center justify-center p-[19px] rounded-[50%] w-[72px]">
                          <Img
                            className="h-8"
                            src="images/img_frame881.svg"
                            alt="frame881"
                          />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Terra Classic
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $0.079
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                              size="txtPoppinsMedium22"
                            >
                              LUNC
                            </Text>
                            <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                              +1.86%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                        <Button className="bg-gradient1  flex h-[72px] items-center justify-center p-[17px] rounded-[50%] w-[72px]">
                          <Img src="images/img_computer.svg" alt="computer" />
                        </Button>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                              size="txtPoppinsSemiBold30"
                            >
                              Solana
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsMedium24WhiteA700"
                            >
                              $0.079
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtPoppinsMedium22"
                            >
                              Sol
                            </Text>
                            <Button className="bg-green-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-green-A700">
                              +1.86%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900 flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start p-6 sm:px-5 rounded-[11px] w-[520px] sm:w-full">
                      <Button className="bg-blue_gray-900_01 flex h-[72px] items-center justify-center p-[19px] rounded-[50%] w-[72px]">
                        <Img
                          className="h-8"
                          src="images/img_frame881.svg"
                          alt="frame881_One"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-300 w-auto"
                            size="txtPoppinsSemiBold30"
                          >
                            Terra Classic
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtPoppinsMedium24WhiteA700"
                          >
                            $0.079
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5.67px] items-center justify-between w-full">
                          <Text
                            className="text-[22px] text-gray-300 sm:text-lg md:text-xl w-auto"
                            size="txtPoppinsMedium22"
                          >
                            LUNC
                          </Text>
                          <Button className="bg-red-A700_3f cursor-pointer font-medium leading-[normal] min-w-[86px] py-[5px] rounded-[5px] text-[17.01px] text-center text-red-A700">
                            +1.86%
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gradient2  flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1920px] pb-[120px] pt-[100px] md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-col gap-3 items-start justify-center w-auto md:w-full">
              <Text
                className="md:text-5xl text-[68px] text-gray-700 w-auto"
                size="txtInterBold68"
              >
                <span className="text-gray-700 font-inter text-left font-bold">
                  Explore the best
                </span>
                <span className="text-gray-700 font-inter text-left font-bold">
                  {" "}
                </span>
                <span className="text-orange-400 font-inter text-left font-bold">
                  Web3 Curator
                </span>
              </Text>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-700 w-auto"
                size="txtPoppinsMedium28Gray700"
              >
                Meet the unsung heroes of Web3, shaping its future, one project
                at a time
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[1688px] mx-auto w-full">
              <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-auto md:w-full">
                <Img
                  className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                  src="images/img_rectangle13.png"
                  alt="rectangleThirteen"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                    src="images/img_rectangle24.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                    src="images/img_rectangle25.png"
                    alt="rectangleTwentyFive"
                  />
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                    src="images/img_rectangle12.png"
                    alt="rectangleTwelve"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[39%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle8.png"
                      alt="rectangleEight"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle19.png"
                      alt="rectangleNineteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                      src="images/img_rectangle13.png"
                      alt="rectangleThirteen"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                      src="images/img_rectangle16.png"
                      alt="rectangleSixteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle8.png"
                      alt="rectangleEight"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle16.png"
                      alt="rectangleFifteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                      src="images/img_rectangle23.png"
                      alt="rectangleTwentyThree"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                      src="images/img_rectangle12.png"
                      alt="rectangleTwelve"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle13.png"
                      alt="rectangleThirteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle17.png"
                      alt="rectangleSeventeen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle14.png"
                      alt="rectangleFourteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                      src="images/img_rectangle8.png"
                      alt="rectangleEight"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                      src="images/img_rectangle18.png"
                      alt="rectangleEighteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle19.png"
                      alt="rectangleNineteen"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle25.png"
                      alt="rectangleTwentyFive"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                      src="images/img_rectangle20.png"
                      alt="rectangleTwenty"
                    />
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                      src="images/img_rectangle21.png"
                      alt="rectangleTwentyOne"
                    />
                  </div>
                </List>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                    src="images/img_rectangle22.png"
                    alt="rectangleTwentyTwo"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                    src="images/img_rectangle23.png"
                    alt="rectangleTwentyThree"
                  />
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[140px]"
                    src="images/img_rectangle23.png"
                    alt="rectangleTwentyThree_One"
                  />
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[140px]"
                    src="images/img_rectangle24.png"
                    alt="rectangleTwentyFour_One"
                  />
                </div>
                <Img
                  className="h-[140px] md:h-auto object-cover rounded-lg w-[140px]"
                  src="images/img_rectangle26.png"
                  alt="rectangleTwentySix"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-col font-inter md:gap-10 gap-[60px] h-[600px] md:h-auto items-start justify-start max-w-[1920px] pb-[140px] pt-[100px] md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-5xl text-[68px] text-white-A700 w-auto"
                size="txtInterBold68WhiteA700"
              >
                <span className="text-white-A700 font-inter text-left font-bold">
                  One world,{" "}
                </span>
                <span className="text-orange-400 font-inter text-left font-bold">
                  One Community
                </span>
              </Text>
            </div>
            <Img
              className="h-40 sm:h-auto max-w-[1816px] mx-auto object-cover w-full"
              src="images/img_frame48095940.png"
              alt="frame48095940"
            />
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1920px] pb-10 pt-20 md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1600px] mx-auto w-full">
              <Text
                className="md:text-5xl text-[68px] text-gray-700 w-auto"
                size="txtInterBold68"
              >
                <span className="text-gray-700 font-inter text-left font-bold">
                  Crypto{" "}
                </span>
                <span className="text-orange-400 font-inter text-left font-bold">
                  News
                </span>
                <span className="text-gray-700 font-inter text-left font-bold">
                  {" "}
                  and{" "}
                </span>
                <span className="text-orange-400 font-inter text-left font-bold">
                  Journals
                </span>
              </Text>
              <div className="flex md:flex-col flex-row font-poppins gap-[27.04px] items-start justify-between max-w-[1600px] w-full">
                <div className="bg-gray-50 border-[3px] border-gray-500 border-solid flex md:flex-1 flex-col gap-[15px] h-[665px] md:h-auto items-center justify-between p-4 rounded-[16px] shadow-bs1 w-auto md:w-full">
                  <Img
                    className="h-[528px] sm:h-auto object-cover rounded-[12px] w-[937px] md:w-full"
                    src="images/img_pictureivkmc.png"
                    alt="pictureivkmc"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                      size="txtPoppinsBold32"
                    >
                      DeFi Protocol Conic Finance Hacked for 1,700 Ether
                    </Text>
                    <Text
                      className="text-[16.54px] text-gray-900 w-auto"
                      size="txtPoppinsRegular1654"
                    >
                      Jul 21, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-7 items-start justify-start w-auto md:w-full">
                  <div className="bg-gray-50 border-[3px] border-gray-500 border-solid md:h-[177px] h-[203px] p-[11px] relative rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="absolute h-[177px] inset-y-[0] my-auto object-cover right-[3%] rounded-[14px] w-[39%]"
                      src="images/img_linkpicture.png"
                      alt="linkpicture"
                    />
                    <div className="absolute flex flex-col gap-[14.59px] h-max inset-y-[0] items-center justify-start left-[3%] my-auto w-[349px]">
                      <div className="flex flex-col items-start justify-start w-[349px]">
                        <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[45.86px] w-[349px]">
                          <Text
                            className="leading-[36.00px] sm:text-[16.96px] md:text-[18.96px] text-[20.96px] text-gray-900"
                            size="txtPoppinsBold2096"
                          >
                            <>
                              Africa-Focused DeFi Platform
                              <br />
                              Mara Releases Ethereum-
                              <br />
                              Compatible Testnet
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[256.69px] w-[349px]">
                        <Text
                          className="text-[16.03px] text-gray-900 w-auto"
                          size="txtPoppinsRegular1603"
                        >
                          Jul 21, 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-7 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-50 border-[3px] border-gray-500 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end p-[15px] rounded-[16px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-[14.59px] items-start justify-start w-[349px]">
                        <div className="flex flex-col items-start justify-start w-[349px]">
                          <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[45.86px] w-[349px]">
                            <Text
                              className="leading-[36.00px] sm:text-[16.96px] md:text-[18.96px] text-[20.96px] text-gray-900"
                              size="txtPoppinsBold2096"
                            >
                              <>
                                Wormhole Launches New
                                <br />
                                Blockchain Connecting to Any
                                <br />
                                Cosmos Appchain
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[256.69px] w-[349px]">
                          <Text
                            className="text-[16.03px] text-gray-900 w-auto"
                            size="txtPoppinsRegular1603"
                          >
                            Jul 21, 2023
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="sm:flex-1 h-[154px] md:h-auto ml-1 sm:ml-[0] sm:mt-0 my-[9px] object-cover rounded-[10px] w-2/5 sm:w-full"
                        src="images/img_linkpicture_154x229.png"
                        alt="linkpicture"
                      />
                    </div>
                    <div className="bg-gray-50 border-[3px] border-gray-500 border-solid flex flex-1 sm:flex-col flex-row sm:gap-[42px] items-center justify-between p-3.5 rounded-[16px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-[14.59px] items-start justify-start sm:ml-[0] ml-[3px] w-[349px]">
                        <div className="flex flex-col items-start justify-start w-[349px]">
                          <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[45.86px] w-[349px]">
                            <Text
                              className="leading-[36.00px] sm:text-[16.96px] md:text-[18.96px] text-[20.96px] text-gray-900"
                              size="txtPoppinsBold2096"
                            >
                              <>
                                Move Over Shiba Inu: Crypto
                                <br />
                                Community Flirts With Hamster
                                <br />
                                Race Betting
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pb-[1.23px] md:pr-10 sm:pr-5 pr-[256.69px] w-[349px]">
                          <Text
                            className="text-[16.03px] text-gray-900 w-auto"
                            size="txtPoppinsRegular1603"
                          >
                            Jul 21, 2023
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[172px] md:h-auto mr-[7px] sm:mt-0 mt-0.5 object-cover rounded-[7px]"
                        src="images/img_linkpicture_172x184.png"
                        alt="linkpicture"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start max-w-[1920px] pb-[120px] pt-20 md:px-10 px-40 sm:px-5 w-full">
            <div className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-center max-w-[1600px] mx-auto md:px-5 py-[50px] rounded-[50px] w-full">
              <Img
                className="sm:flex-1 h-[400px] md:h-auto object-cover w-[400px] sm:w-full"
                src="images/img_257789157125254.png"
                alt="257789157125254"
              />
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-center w-auto md:w-full">
                <div className="flex flex-col gap-5 items-start justify-center w-auto md:w-full">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-white-A700 w-auto"
                    size="txtPoppinsBold58"
                  >
                    <span className="text-white-A700 font-poppins font-bold">
                      Start Exchange on{" "}
                    </span>
                    <span className="text-orange-400 font-poppins font-bold">
                      Crypto
                    </span>
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[901px] md:max-w-full text-lg text-white-A700"
                    size="txtPoppinsMedium18"
                  >
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Forem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </Text>
                </div>
                <Button className="bg-white-A700 cursor-pointer font-medium min-w-[168px] py-3.5 rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gradient  flex flex-col font-inter gap-[15px] items-center justify-end p-[15px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1609px] mt-10 mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[317px] items-start justify-between w-auto md:w-full">
                <div className="flex flex-col gap-[52px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-center text-white-A700 uppercase w-auto"
                      size="txtInterBold60"
                    >
                      Metavoeux
                    </Text>
                    <Text
                      className="leading-[36.00px] max-w-[367px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtInterMedium32"
                    >
                      Let’s create something together
                    </Text>
                  </div>
                  <Button className="bg-white-A700 capitalize cursor-pointer font-medium min-w-[264px] py-[18px] rounded-lg shadow-bs2 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[1.00px]">
                    Get Started
                  </Button>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-14 w-14"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_alarm.svg"
                      alt="alarm"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-14 w-14"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    COMPANY
                  </Text>
                  <Text
                    className="leading-[40.00px] text-2xl md:text-[22px] text-gray-100 sm:text-xl"
                    size="txtInterRegular24"
                  >
                    <>
                      About Us
                      <br />
                      Services
                      <br />
                      News & Journals
                      <br />
                      Contact
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase w-auto"
                  >
                    <Text size="txtInterSemiBold24">Contact Us</Text>
                  </a>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="leading-[40.00px] text-2xl md:text-[22px] text-gray-100_a2 sm:text-xl"
                      size="txtInterRegular24Gray100a2"
                    >
                      <span className="text-gray-100 font-inter text-left font-medium">
                        <>
                          Address:
                          <br />
                        </>
                      </span>
                      <span className="text-gray-100 font-inter text-left font-normal">
                        <>
                          Street 2000 35th Ave
                          <br />
                          State: Colorado
                        </>
                      </span>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-100_a2 sm:text-xl w-auto"
                      size="txtInterRegular24Gray100a2"
                    >
                      <span className="text-gray-100 font-inter text-left font-medium">
                        Postal:{" "}
                      </span>
                      <span className="text-gray-100 font-inter text-left font-normal">
                        Code80634
                      </span>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-100_a2 sm:text-xl w-auto"
                      size="txtInterRegular24Gray100a2"
                    >
                      <span className="text-gray-100 font-inter text-left font-medium">
                        Phone No.:
                      </span>
                      <span className="text-gray-100 font-inter text-left font-normal">
                        {" "}
                        (970) 356-5750
                      </span>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-100_a2 sm:text-xl w-auto"
                      size="txtInterRegular24Gray100a2"
                    >
                      <span className="text-gray-100 font-inter text-left font-medium">
                        Country:
                      </span>
                      <span className="text-gray-100 font-inter text-left font-normal">
                        {" "}
                        United States
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins gap-2 items-end justify-start max-w-[1600px] mx-auto md:px-5 w-full">
              <Line className="bg-white-A700_71 h-0.5 w-full" />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtPoppinsSemiBold16"
              >
                © 2023 Metavoeux, Inc. All rights reserved
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentyOnePage;
