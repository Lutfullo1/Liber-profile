import React from "react";
import { GoogleplayIcon } from "@/app/_assets/googleplay-icon";
import { ApplestoreIcon } from "@/app/_assets/applestore-icon";
import { SocialsIcon } from "@/app/_assets/socials-icon";
import { UzcardIcon } from "@/app/_assets/uzcard-icon";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-indigo-300 mt-[93px] pt-[31px] pb-[63px]">
        <div className="container flex gap-[137px] ">
          <ul className="footer__list">
            <h4>Платформа хақида</h4>
            <li>Liber ўзи нима?</li>
            <li>Фойдаланиш шартлари</li>
            <li>Ёрдам</li>
          </ul>
          <ul className="flex flex-col gap-[14px]">
            <h4>Обуна хақида</h4>
            <li>Обуна бўлиш</li>
            <li>Қандай тўлаш</li>
          </ul>
          <ul className="flex flex-col gap-[14px]">
            <h4>Китоблар</h4>
            <li>Аудио китоблар</li>
            <li>Электрон китоблар</li>
            <li>Китоблар</li>
          </ul>
          <ul className="flex flex-col gap-[14px]">
            <h4>Мобил илова</h4>
            <GoogleplayIcon />
            <ApplestoreIcon />
          </ul>
        </div>
      </footer>

      <div className="bg-slate-800 pt-[12px] pb-[33px]">
        <div className="container flex gap-[131px]">
          <ul className="footer__bottom__text">
            <p className="text-white">Ижтимоий тармоқлар</p>
            <div className="flex gap-3 mt-2">
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
            </div>
          </ul>
          <ul className="footer__bottom__text">
            <p className="text-white">Боғланиш</p>
            <li className="text-white">+998 90 253 77 53 support@liber.uz</li>
          </ul>
          <ul className="footer__bottom__text">
            <p className="text-white">Биз қабул қиламиз</p>
            <div className="flex gap-3">
              <UzcardIcon />
              <UzcardIcon />
              <UzcardIcon />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
