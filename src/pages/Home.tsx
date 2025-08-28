import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import syKapak from '@/assets/images/sy_kapak.jpg'
import downloadOnTheAppstore from '@/assets/images/download_on_the_appstore.png'
import getItOnGooglePlay from '@/assets/images/get_it_on_google_play.png'
import kiosk from '@/assets/images/kiosk.png'
import mockup from '@/assets/images/mockup.png'
import syKapak2 from '@/assets/images/sy_kapak.png'
import suitableYemek2 from '@/assets/images/suitableyemek2.png'
import culinaPatisserie from '@/assets/images/culina-patisserie.png'
import sauceAndFries from '@/assets/images/sauce-and-fries.png'
import sakiOcakbasi from '@/assets/images/saki-ocakbasi.png'

export const Home = () => {

    const [selectedTab, setSelectedTab] = useState<'individual-user' | 'corporate-user'>('corporate-user')

    return (
        <React.Fragment>
            <section className='flex flex-col md:flex-row p-10 gap-y-5'>
                <div className='basis-1/2 md:p-5'>
                    <div className='text-xl flex flex-col gap-y-3'>
                        <h5 className='font-bold text-2xl mt-8'>Türkiye’nin Yeni 5. Yemek Platformu</h5>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-3 h-3 bg-black rounded-full'></div> Satış ve servis süreçlerinde ihtiyaç duyduğunuz tüm bileşenleri barındırır.
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-3 h-3 bg-black rounded-full'></div> Ürünlerinizi müşterilerinize hızlı ve etkili bir şekilde ulaştırmanızı sağlar.
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-3 h-3 bg-black rounded-full'></div> Potansiyel müşterileri işletmenize çekerek müşteri portföyünüzü genişletir.
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-3 h-3 bg-black rounded-full'></div> Operasyonel maliyetleri azaltarak size önemli ölçüde tasarruf sağlar.
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-3 h-3 bg-black rounded-full'></div> Alışılmış kalıpların ötesine geçerek yenilikçi bir yaklaşım sunar.
                        </div>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <img src={suitableYemek2} className='w-full h-96 object-cover rounded shadow' />
                </div>
            </section>

            <section className='p-10'>
                <div className='flex mb-5 gap-x-5'>
                    <div
                        className={`basis-1/2 text-center border-b-4 border-b-gray-300  hover:bg-gray-50 hover:cursor-pointer p-8 transition-all ${selectedTab === 'individual-user' ? 'border-b-orange-600 bg-orange-300 font-bold' : ''}`}
                        onClick={() => setSelectedTab('individual-user')}
                    >
                        Bireysel Kullanıcı
                    </div>
                    <div
                        className={`basis-1/2 text-center border-b-4 border-b-gray-300  hover:bg-gray-50 hover:cursor-pointer p-8 transition-colors ${selectedTab === 'corporate-user' ? 'border-b-orange-600 bg-orange-300 font-bold' : ''}`}
                        onClick={() => setSelectedTab('corporate-user')}
                    >
                        Kurumsal Kullanıcı
                    </div>
                </div>

                {selectedTab === 'individual-user' && <div className='flex flex-col md:flex-row md:items-center md:gap-x-5'>
                    <div className='basis-1/2 flex justify-center'>
                        <img src={mockup} className='w-1/2' />
                    </div>
                    <div className='basis-1/2'>
                        <div>
                            <h5 className='font-bold text-2xl mb-5'>Suitable Yemek</h5>
                            <p className='text-lg'>
                                SuitableYemek.com ve bireylere yönelik mobil uygulamamız ile, sağlıklı, pratik ve damak tadına uygun yemekleri bir araya getiren modern bir yemek platformudur.
                                Amacımız; her kullanıcının kendi ihtiyaçlarına, beslenme alışkanlıklarına ve yaşam tarzına en uygun yemekleri kolayca bulmasını sağlamaktır.
                                Platformumuza bağlı restoran ve kafelerde; Diyetlere özel seçenekler (vegan, vejetaryen, ketojenik, glutensiz vb.),
                            </p>
                            <br />
                            <p className='text-lg'>
                                Geleneksel lezzetler ve güncel beslenme trendleri yer almaktadır.
                                SuitableYemek mobil uygulaması,  kullanıcılarına beslenme önerileri, alışveriş listeleri ve kişiselleştirilmiş menüler de sunarak hayatı kolaylaştırır.
                                Sen de bugün SuitableYemek dünyasına katıl, uygulamayı indir ve ihtiyacına en uygun lezzetleri keşfet!
                            </p>
                            <div className='flex gap-x-5'>
                                <a href='https://apps.apple.com/us/app/suitable-live/id6446167362' target='_blank'>
                                    <img src={downloadOnTheAppstore} className='object-contain w-48 h-48' />
                                </a>
                                <a href='https://play.google.com/store/apps/details?id=com.proaktif.suitablelive&hl=en' target='_blank'>
                                    <img src={getItOnGooglePlay} className='object-contain w-48 h-48' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}

                {selectedTab === 'corporate-user' && <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-col-reverse gap-y-5 md:flex-row'>
                        <div className='md:basis-1/2 md:p-10 flex flex-col gap-y-3'>
                            <h5 className='font-bold text-2xl'>Neden Suitable Yemek?</h5>
                            <div className='text-lg'>
                                <b>1.</b> Tüm diğer yemek platformları ile entegre POS programı ve yan uygulamalarını sağlayan,
                            </div>
                            <div className='text-lg'>
                                <b>2.</b> Sizi ve işletmenizi özgürleştiren,
                            </div>
                            <div className='text-lg'>
                                <b>3.</b> Üretim ve satış, servis maliyetlerinizi düşüren,
                            </div>
                            <div className='text-lg'>
                                <b>4.</b> Daha ekonomik ürünler sunmanızı ve müşteriye ulaştırmanızı mümkün kılan,
                            </div>
                            <div className='text-lg'>
                                <b>5.</b> İşletmenizi uzaktan hem satış, hem çalışan anlamında yönetmenizi sağlayan,
                            </div>
                            <div className='text-lg'>
                                <b>6.</b> En önemlisi size tüm bu yazılımları ücretsiz ve sınırsız sağlayan tek yemek platformu.
                            </div>
                        </div>
                        <div className='md:basis-1/2'>
                            <img src={syKapak} className='w-full h-96 object-cover rounded shadow' />
                        </div>
                    </div>
                    <h3 className='font-bol text-3xl font-bold'>Uygulamalarımız</h3>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='md:basis-1/2'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NJQLjP4YyaA?si=Z4amzqNapmJZ29HF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-lg shadow-lg w-full h-96'></iframe>
                            </div>
                            <div className='md:basis-1/2 p-8'>
                                <h5 className='font-bold text-2xl'>Suitable POS</h5>
                                <br />
                                <p className='text-lg'>
                                    Gelişmiş özellikleri sayesinde internetiniz kesildiğinde bile Suitable Yemek'i kullanabilirsiniz. İşlerinizin aksamaması ve işletmenizin iş akışının devam etmesi üzerine kurguya sahip olan Suitable Yemek ile 7/24 çalışabilirsiniz.
                                </p>
                                <br />
                                <a href="https://suitablepos.com/app" className='border-2 border-orange-500 px-8 py-4 rounded text-orange-500 hover:bg-orange-500 hover:text-white text-center' target='_blank'>
                                    Kaydol / Giriş Yap
                                </a>

                            </div>
                        </div>

                        <div className='flex flex-col-reverse md:flex-row'>
                            <div className='md:basis-1/2 p-8'>
                                <h5 className='font-bold text-2xl'>Suitable BOSS</h5>
                                <br />
                                <p className='text-lg'>
                                    Genel olarak SuitablePOS'a bağlı olarak çalışan işletme(ler) sahibine, sahip olduğu işletmeler hakkında özet ve detaylı bilgi ve takibini sağlayan bir raporlama uygulamasıdır.
                                </p>
                                <div className='flex gap-x-5'>
                                    <a href='https://apps.apple.com/us/app/suitable-boss/id6504984555' target='_blank'>
                                        <img src={downloadOnTheAppstore} className='object-contain w-48 h-48' />
                                    </a>
                                    <a href='https://play.google.com/store/apps/details?id=com.proaktif.org.suitableboss&hl=en' target='_blank'>
                                        <img src={getItOnGooglePlay} className='object-contain w-48 h-48' />
                                    </a>
                                </div>
                            </div>
                            <div className='md:basis-1/2'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2al1CxexdI8?si=1F_eny0NnPWUzTg_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-lg shadow-lg w-full h-96'></iframe>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row'>
                            <div className='md:basis-1/2'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1BqiJ1DCMxs?si=IsVYsEL6XdfwOSvM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-lg shadow-lg w-full h-96'></iframe>
                            </div>
                            <div className='md:basis-1/2 p-8'>
                                <h5 className='font-bold text-2xl'>Suitable Employee</h5>
                                <br />
                                <p className='text-lg'>
                                    SuitablePOS ve SuitableBOSS ile entegre çalışarak işletmedeki personelin her anlamda takibini, sevk ve idaresini yapar. Patron ve personel iletişimi iki yönlü kurar. HR eklentisi ile işletmenin aradığı personeli kolayca bulunmasını sağlarken, iş arayan personelin de iş bulmasını sağlar.
                                </p>
                                <br />
                                <p className='text-lg'>
                                    SuitablePOS ve SuitableBOSS ile entegre çalışarak işletmedeki personelin (garson, şef, temizlikçi, kurye gibi 14 ayrı rolde) görevlendirilmesi, takibi, sevk ve idaresini yapar. Yönetici ve personel arasındaki iletişimi iki yönlü kurar.
                                </p>
                                <div className='flex gap-x-5'>
                                    <a href='https://apps.apple.com/us/app/suitable-employee/id6654914636' target='_blank'>
                                        <img src={downloadOnTheAppstore} className='object-contain w-48 h-48' />
                                    </a>
                                    <a href='https://play.google.com/store/apps/details?id=com.proaktif.suitable_employee&hl=en' target='_blank'>
                                        <img src={getItOnGooglePlay} className='object-contain w-48 h-48' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col-reverse md:flex-row'>
                            <div className='md:basis-1/2 p-8'>
                                <h5 className='font-bold text-2xl'>Suitable Kiosk</h5>
                                <br />
                                <p className='text-lg'>
                                    Suitable Kiosk uygulaması ile dokunmatik ekran üzerinden sipariş alabilir, menü yönetimi yapabilir ve müşteri etkileşimini artırabilirsiniz. Kiosk uygulaması, müşteri deneyimini iyileştirirken aynı zamanda işletmenizin verimliliğini de artırır.
                                </p>
                            </div>
                            <div className='md:basis-1/2 flex justify-center'>
                                <img src={kiosk} className='rounded-lg shadow-lg w-full h-96 object-cover' />
                            </div>
                        </div>
                    </div>

                </div>}
            </section>

            {/* <section className='flex justify-between'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section> */}

            <section>
                <h5 className='text-2xl font-bold px-5 mb-5'>Müşteri Yorumları</h5>
                <section className='flex flex-col md:flex-row gap-x-5 px-5 gap-y-5 md:gap-y-0'>

                    <ReviewCard
                        image={culinaPatisserie}
                        title='Bekir Özdoğan'
                        company='Culina Patisserie'
                        text='"İşletmemiz büyüdükçe böyle bir sisteme ihtiyaç duyduk ve SuitablePOS ile başladık. Tüm masalarımızı kolayca takip edebiliyoruz, hem basit hem detaylı raporları var. Menüye ürün eklemek, çıkarmak çok pratik. Destek için ulaşmak da çok kolay ve hızlı."' />

                    <ReviewCard
                        image={sauceAndFries}
                        title='Hakkan Sevinç'
                        company='Sauce & Fries'
                        text='"Online sipariş entegrasyonları sayesinde farklı platformlardan gelen siparişleri tek yerden yönetebiliyorum. Bu da bize ciddi bir zaman tasarrufu sağladı. Müşteri desteği de her zaman yardımcı oluyor, teşekkürler!"'
                    />

                    <ReviewCard
                        image={sakiOcakbasi}
                        title='Saki Ocakbaşı Nevizade'
                        company='Uğur Kılıçgün'
                        text='"Online sipariş entegrasyonları sayesinde farklı platformlardan gelen siparişleri tek yerden yönetebiliyorum. Bu da bize ciddi bir zaman tasarrufu sağladı. Müşteri desteği de her zaman yardımcı oluyor, teşekkürler!"'
                    />
                </section>
            </section>

            <section className='p-10 flex flex-col gap-y-5'>
                <h5 className='font-bold text-2xl'>Sıkça Sorulan Sorular</h5>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-y-3"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className='bg-gray-50 rounded px-3 hover:bg-gray-100 transition-colors'>
                        <AccordionTrigger className='hover:cursor-pointer text-lg'>Suitable Yemek Platformu Nedir?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                            <p>
                                Suitable, işletmelerin Paket Servis kazançlarına ortak olmadan kazançlarını arttırmaya yönelik hazırlanan bir hizmet platformudur. Suitable Yemek projesi Kocaeli Üniversitesi Teknoparkında geliştirilmiştir. TÜBİTAK, KOSGEB ve yatırımcı destekleriyle, teknolojiyi her ölçekteki işletmelere ulaştırmayı amaçlamaktadır. Uluslararası patentle “Kafe/Restoran” ve “Tüketici” arasında ekosistem oluşturan yapısıyla onlarca özelliği olan ürünleri işletmenize 7/24 destekle “Ücretsiz” olarak sunar.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='bg-gray-50 rounded px-3 hover:bg-gray-100 transition-colors'>
                        <AccordionTrigger className='hover:cursor-pointer text-lg'>Suitable Yemek kullanmam için herhangi bir ücret ödemem gerekiyor mu?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                            <p>
                                Suitable Yemek Platformu kapsamında diğer platformlardan farklı olarak işletmenizi büyütmeniz için  ihtiyacınız olan gelişmiş özellikli POS yazılımını ve yardımcı yazılımlarını tamamen ÜCRETSİZ sunuyoruz. Aylık yıllık ücretler yok. Sadece Suitable Yemek mobil uygulaması üzerinden müşterileriniz sipariş verirse yada Caller ID uygulamamız üzerinden müşterileriniz telefon ile sipariş verdiğinde; sözleşmemizde de belirtildiği üzere diğer yemek platformlarında oldugu gibi yüksek komisyonlar değil, sadece yüzde 1 komisyon ödüyorsunuz.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3' className='bg-gray-50 rounded px-3 hover:bg-gray-100 transition-colors'>
                        <AccordionTrigger className='hover:cursor-pointer text-lg'>
                            Suitable Yemek Platformunun işletmeme avantajları nedir?
                        </AccordionTrigger>
                        <AccordionContent className='flex flex-col gap-4 text-balance text-lg'>
                            <p>
                                Suitable Yemek diğer platformlardan farklı olarak işletmenizi yönetirken ihtiyaç duyacağınız tüm yazılımları ve hizmetleri sağlamaktadır. Müşterilerinizden Masadan, online yada telefon yoluyla siparişlerinizi alıp mutfağa ileteceğiniz POS yazılımı, işletmenizdeki satışları izleyebileceğiniz BOSS uygulaması, çalışanlarını kontrol edecebileceğiz Employee uygulaması yada hızlı sipariş alabileceğiniz KİOSK yazılımı, müşterilerinize ürünleri teslim edeceğiniz Kurye ve takip yazılımı gibi birçok yazılımı size sağlar.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </React.Fragment>
    )
}

const ReviewCard = ({ image, title, company, text }: { image: string, title: string, company: string, text: string }) => {

    return (
        <div className='basis-1/3  p-8 rounded-3xl shadow-lg text-lg'>
            <div className='flex gap-x-5'>
                <img src={image} className='w-16 h-16 object-cover rounded-full' />
                <div className='flex flex-col gap-y-2'>
                    <h5 className='font-bold'>{title}</h5>
                    <h5 className='text-gray-600'>{company}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}