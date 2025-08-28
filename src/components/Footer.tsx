import React from 'react'
import downloadOnTheAppstore from '@/assets/images/download_on_the_appstore.png'
import getItOnGooglePlay from '@/assets/images/get_it_on_google_play.png'
import mastercard from '@/assets/images/mastercard.png'
import visa from '@/assets/images/visa.png'
import payWithIyzico from '@/assets/images/pay_with_iyzico.svg'
import instagram from '@/assets/images/instagram.svg'
import youtube from '@/assets/images/youtube.svg'
import x from '@/assets/images/x.svg'

export const Footer = () => {


    return (
        <React.Fragment>
            <footer className='flex flex-col border-t-gray-200 border-t-2 bg-gray-50 px-16'>
                <div className='flex gap-x-5 items-center pt-8'>
                    Bizi Takip Edin
                    <a href='https://www.instagram.com/suitableyemek' target='_blank' className='hover:text-[#FF0000] text-green-100'>
                        <img src={instagram} className='w-6 h-6' />
                    </a>

                    <a href='https://www.youtube.com/@SuitableYemek ' target='_blank'>
                        <div>
                            <img src={youtube} className='w-6 h-6' />
                        </div>
                    </a>
                    <a href='https://x.com/suitableyemek' target='_blank'>
                        <img src={x} className='w-6 h-6' />
                    </a>
                </div>
                <div className='flex flex-col gap-y-5 md:flex-row gap-x-8 py-8'>
                    <div className='basis-1/4 flex flex-col gap-y-5'>
                        <div className='flex flex-col gap-y-1'>
                            <h5 className='font-bold text-xl'>Sözleşmeler</h5>
                            <a href='/satis_ve_kullanim_sozlesmesi.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-orange-600 transition-colors'>
                                Mesafeli Satış Sözleşmesi
                            </a>
                            <a href='/gizlilik_sozlesmesi.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-orange-600 transition-colors'>
                                Gizlilik Sözleşmesi
                            </a>
                            <a href='/kvkk_aydinlatma_metni.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-orange-600 transition-colors'>
                                KVKK Aydınlatma Metni
                            </a>
                            <a href='/hizmet_iptali_ve_iade.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-orange-600 transition-colors'>
                                Hizmet İptali ve İade
                            </a>
                        </div>
                    </div>
                    <div className='basis-1/4 flex flex-col gap-y-3'>
                        <h5 className='font-bold text-xl'>İletişim Bilgileri</h5>
                        <span className='font-semibold'>Suitable Dijital Platform Hizmetleri Anonim Şirketi</span>

                        <div className='flex gap-x-2'>
                            <b>E-posta:</b>
                            info@suitableyemek.com
                        </div>
                        <div className='flex gap-x-2'>
                            <b>Adres:</b>
                            İçerenköy Mahallesi Topçu İbrahim Sokak No:7 Daire:6
                            Ataşehir/İstanbul
                        </div>
                    </div>
                    <div className='basis-2/4 flex flex-col gap-y-3'>
                        <h5 className='font-bold text-xl'>Hakkımızda</h5>
                        <p>
                            Suitable projesi, 2023 yılında pandemi sonrasında potansiyel müşterileri restoranlara getirmek amacıyla Kocaeli Üniversitesi Teknoparkı’nda doğmuştur; ve gelişerek zaman içinde işletmeler ile müşteriler arasında bir köprü haline gelmiştir. Ürettiği çözümler Türkiye’de ve dünya çapında patentlenmiştir. İşletmelerin uçtan uca tüm ihtiyaçlarını tek elden karşılayan bütün bileşenlere sahip olup, gerekli tüm yazılımları ücretsiz olarak sunmaktadır. Suitable, son olarak evrildiği noktada bir yemek platformu olarak yiyecek-içecek sektörüne komple çözüm sunmaktadır.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-0 mb-5 basis-1/3'>
                    <div className='text-center md:text-start'>
                        Suitable Yemek, Suitable A.Ş. şirketine aittir.
                    </div>
                    <div className='flex gap-x-5 justify-center items-center basis-1/3'>
                        <img src={mastercard} className='w-16 object-contain' />
                        <img src={visa} className='w-16 object-contain' />
                        <img src={payWithIyzico} className='w-32 object-contain' />
                    </div>
                    <div className='basis-1/3'></div>
                </div>
            </footer>
            <section className='bg-gray-800 text-white p-5 text-center'>
                2025 © Suitable A.Ş. Tüm Hakları Saklıdır.
            </section>
        </React.Fragment>
    )
}