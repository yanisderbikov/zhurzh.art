import Text from "../../common/Text.jsx";
import styles from '../../../styles/pages/article/ArticleCommunity.module.css'

export default function ArticleCommunity({}) {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.alignCenterText}>
                        <Text variant={'h1'} children={'Устройство общин'}/>
                    </div>
                    <div className={styles.halfContainer}>
                        <div className={styles.alignCenterText}>
                            <Text italic={true} color={'#E6C196'}
                                  children={'Понятие взаимоотношений складывается у виверны с детства, что во многом определяет её дальнейшую роль в обществе. Именно этот опыт влияет на то, будет ли она принята окружающими и, в свою очередь, позволит ли она другим приблизиться к себе.'}/>
                        </div>
                    </div>
                    <div className={styles.alignCenterText}>
                        <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'}/>
                    </div>

                    <div className={styles.alignCenterText}>
                        <Text variant={'h2'} children={'Что такое община?'}/>
                    </div>
                    <Text indent={28} color={'#BABCDB'} className={styles.alignJustifiedText}
                          children={'В мире Морской реминисценции подводная община - это группа виверн, живущих на одной территории и помогающих друг другу выживать. Это как большая семья, где каждый ее соплеменник выполняет свою функцию и роль, выбранную по его качествам и умениям. '}/>
                    <Text indent={28} color={'#BABCDB'} className={styles.alignJustifiedText}
                          children={'У каждой общины есть свои правила и традиции, соблюдая которые, виверны могут существовать в мире и понимании. При возникновении проблем, виверны собираются вместе и ищут пути их решения. Но главное — это взаимная поддержка и единство, так как только будучи сплоченными, подводные жители могут справиться с трудностями и опасностями океана.  '}/>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <img src={'/images/article/community/Picture1.jpg'} className={styles.imageNoGap}/>
                    <Text italic={true} color={'#E6C196'} className={styles.alignCenterText}
                          children={'“…Глубоководные виверны самодостаточные сильные существа , способные охотиться и выживать в дикой природе. Но в условиях опасного подводного мира, большая часть из них примыкает к общинам, собирающихся по 25-30 особей…” — фрагмент из статьи Виверны. '}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Почему община?'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Виверны на протяжении веков выживали в суровых условиях подводного мира, ища тот образ жизни, который обеспечил бы им безопасность и благополучие: '}/>

                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦ Изменение среды обитания'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Виверны регулярно сталкивались с потерями источника питания и тяжелыми климатическими условиями;'}/>
                                </div>
                            </div>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Разделение труда '}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Виверны делились и распределяли труд между собой для более эффективного выживания;'}/>
                                </div>
                            </div>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦ Социальное развитие'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Взаимодействие повышало уровень доверия, что сильно развивало культурные особенности вида;'}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦ Внешние угрозы'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Численность опасных существ в округе со временем увеличивалась, а безопасных территорий становилось все меньше;'}/>
                                </div>
                            </div>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Обмен знаниями'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Передача опыта и навыков младшим поколениям ускоряла адаптацию к опасной окружающей среде;'}/>
                                </div>
                            </div>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Защита потомства '}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Совместный уход и отстаивание территорий повышали выживаемость потомства и сообщества в целом;'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={'/images/article/community/Picture2.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'На настоящий момент, от социальной памяти Глубоководных виверн осталось совсем немного. Подводная культура жителей воды в упадке, однако, важные этапы их развития, как вида, сохранились в памяти старейшин различных общин по всему Океану. '}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Устройство'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Структуру общин Глубоководных виверн можно назвать “Клановым союзом” или “Союзом гнезд”, где каждая группа виверн берет на себя определенную роль в той сфере, в которой она наиболее успешна. '}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'В этой системе все вопросы, касающиеся общего выживания, обсуждаются на равных до тех пор, пока не будет найдено решение. Если же спор заходит в тупик, главные представители кланов (отвечающие за соответствующие сферы) берут на себя роль “голосов” общины и продолжают обсуждение между собой, стремясь найти компромисс.'}/>
                    <img src={'/images/article/community/Picture3.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Клановая система помогает вивернам жить вместе на взаимовыгодных условиях. Например, виверны, которые не имеют опыта в добыче пищи, компенсируют это благодаря помощи охотников, в то время как сами занимаются разведкой или собирательством. '}/>

                    <Text variant={'h2'} children={'Размер общин'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Как уже упоминалось, виверны нередко создают сообщества по 25-30 особей, что считается довольно крупными общинами. Существуют и более мелкие или средние группы. И их размер определяется такими факторами, как местоположение, уровень безопасности, доступность пищи и удаленность от других виверн: '}/>
                    <div className={styles.rowToColumn}>
                        <div className={styles.alignCenterText}>
                            <Text color={'#FFFFFF'} variant={'h3'} children={'Малая'}/>
                            <Text color={'#BABCDB'} children={'5-10 особей'}/>
                        </div>
                        <div className={styles.alignCenterText}>
                            <Text color={'#F5DFCA'} variant={'h3'} children={'Средняя'}/>
                            <Text color={'#BABCDB'} children={'15-20 особей'}/>
                        </div>
                        <div className={styles.alignCenterText}>
                            <Text color={'#E6C196'} variant={'h3'} children={'Большая'}/>
                            <Text color={'#BABCDB'} children={'25-30 особей'}/>
                        </div>
                    </div>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Численность общины часто меняется, в зависимости от уровня смертности и рождаемости внутри нее. Также, некоторые виверны могут добровольно покидать общины или быть изгнаны за серьезные нарушения правил. Иногда одиночки присоединяются к общинам сами или просто переходят из одной в другую. '}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Виверны живут в нестабильных условиях из-за частых природных катаклизмов и угроз со стороны. Обычно, большие общины не перемещаются и не кочуют, предпочитая оставаться на месте, несмотря на опасности. В таких сообществах есть как многочисленные семьи, так и одиночки, пришедшие из других регионов. Маленькие общины могут кочевать в поисках более безопасного места для жизни.'}/>

                    <img src={'/images/article/community/Picture4.jpg'} className={styles.image}/>

                    <Text variant={'h2'} children={'Границы'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Территории каждой общины не имеют чётких границ. Виверны опираются на природные ориентиры, такие как коралловые хребты, подводные скалы или поля светящихся водорослей, которые заметны издалека. Кроме того, для обозначения владений используются искусственные метки: оставленные кристаллы, монументы, символы, указывающие на принадлежность территории.'}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Расположение общины напрямую влияет на ее состав. Например, те, кто живут рядом с полями светящихся водорослей, будут богаты этими ресурсами. А общины что соседствуют с незнакомыми территориями будут развивать исследовательские направления. Среда определяет не только доступные ресурсы, но и специализации виверн.'}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>
                    <Text variant={'h2'} children={'Клановая система'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Кланы внутри общин основываются на самых важных элементах бытовой жизни. Их состав часто схож между собой, но может меняться в зависимости от потребностей и численности виверн в общине: Охотники (охотники и кузнецы), Собиратели (светлые и темные), Защитники (стражи и странники), Вестники (водные и штормовые), Мастера (мастера, ремесленники и распорядители), Хранители (наставники и жрецы).'}/>
                    <img src={'/images/article/community/Picture5.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Каждый клан имеет подразделения — группы, в зависимости от их вида деятельности. Чтобы держать всех виверн в коллективном единстве, у каждого клана есть лидер, отвечающий за группы в нем. Он выбирается исходя из лучших проявлений качеств виверны. Отказаться от этой позиции нельзя, пока соплеменники не решат выбрать другую виверну на место предыдущего кланового лидера. '}/>


                    <img src={'/images/article/community/Picture6.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Охотники'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Это клан виверн, обеспечивающих общину мясом, чешуей, костями и другими ценными ресурсами, необходимыми для выживания. Внутри клана выделяется две группы: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Охотники'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Изучают повадки морских животных и разрабатывают тактики скрытной или загонной охоты. Отлавливают рыбу, охотятся на акул, гигантских крабов и других подводных тварей. Их обязательные навыки — это выносливость, скорость, наблюдательность, сила и умение работать сообща. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Кузнецы'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Обрабатывают добытые материалы и создают охотничьи снасти с ловушками. Изготавливают крепкие сети, острые крючки, когти-резаки и приманки для хищников. Их работа делает охоту эффективнее и безопаснее. В сложные времена могут выступать как мастера по орудиям. '}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={'/images/article/community/Picture7.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Собиратели'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Клан, что обеспечивает общину всем, что дает океан. Они исследуют подводные просторы, добывая растительную пищу, материалы и редкие вещества, необходимые для жизни. Делятся на две группы: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Светлые'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Собирают повседневные ресурсы, такие как водоросли, съедобные растения, плоды морских деревьев, ягоды, кору и древесину, а также рачков и слизней, важных для пищи и ремесла. Их труд питает общину и дает материалы для строительства и снастей. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Темные'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Исследуют опасные глубины и далекие регионы, собирая редкие ресурсы: кристаллы, серу, кости, морское стекло. Их находки используются в кузнечном деле, медицине и ритуалах. Осторожность и знания подводных течений — самые важные навыки.'}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={'/images/article/community/Picture8.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Защитники'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Щит и опора всей общины. Виверны, стоящие на страже ее безопасности и процветания. Их главная задача — защищать территорию, следить за порядком и исследовать новые границы: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Стражи'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Патрулируют границы, отражая атаки морских хищников и чудовищ, а также следят за миром внутри общины. Их сила, опытность и дисциплина делают их главной линией обороны. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Странники'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Исследуют дальние воды, ищут новые территории для жизни и добычи ресурсов. Помогая охотникам и собирателям, открывают новые регионы и расширяют горизонты общины. В моменты переселения выполняют роль навигаторов ориентируя виверн. '}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={'/images/article/community/Picture9.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Вестники'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Связующее звено между общинами, несущее вести через водные просторы. Вестники быстрые, ловкие и выносливые виверны, которые доставляют важные сообщения через огромные расстояния: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Водные'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Переносят новости, личные послания и дипломатические запросы, сохраняя связь между общинами даже на самых дальних границах. Их скорость и знание течений делают их незаменимыми вивернами. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Штормовые'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Доставляют вести наземным существам, пересекая бурные моря и чужие земли. Легендарные гонцы, которыми смогли стать очень немногие. Сейчас группа считается утерянной из-за Великого Тягуна. '}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={'/images/article/community/Picture10.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Мастера'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Хранители облика общины, отвечающие за строительство, искусство и ресурсы. Их труд делает жизнь виверн безопасной, комфортной и наполненной смыслом. Это единственный клан, в котором выделяется три группы: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Мастера'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Создают жилища и подводные укрытия. Высекают дома в скалах и укрепляют их древесиной и растениями, обустраивая пространство для защиты от течений. Их работа обеспечивает виверн укромным и прочным жилищем. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Ремесленники'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Строят монументы, украшают ритуальные объекты и создают витражные скульптуры из морского стекла. Их работа сохраняет память о важных событиях и укрепляет дух виврерн. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Распорядители'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Координируют работу других кланов, сообщая, где стоит увеличить добычу, а где — распределить запасы. Хранят ресурсы, следят за запасами еды, материалов и строительных ресурсов. Это небольшая, но необходимая группа, от которой зависит баланс в общине. '}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={'/images/article/community/Picture11.jpg'} className={styles.image}/>
                    <Text variant={'h2'} children={'Хранители'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Носители знаний, духовные наставники и целители, поддерживающие виверн в учениях и здоровье. Их мудрость помогает общине выживать и помнить свои корни: '}/>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Наставники'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Следят за гнездами и молодняком, обучают юных виверн выживанию, передавая знания об охоте и ремеслах. Их глубокие познания в физиологии позволяют лечить раны и болезни, помогая общине сохранять свою силу и здоровье. '}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.points}>
                            <div className={styles.headerAndBody}>
                                <Text color={'#E6C196'} children={'✦  Жрецы'}/>
                                <div className={styles.bodyHeadAndBody}>
                                    <Text color={'#BABCDB'}
                                          children={'Берегут реликвии, книги и морские свитки, передавая через них древние сказания. Управляют обрядами и проводят важные для виверн ритуалы. Когда-то были духовными лидерами, но после сложных времен и культурного упадка их группа считается утерянной, а многие знания — утраченными. '}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Любая община виверн представляет собой сложную, но гармоничную систему, где каждая группа играет свою роль в поддержании жизни. Каждый клан выполняет свою задачу, и благодаря этому общество виверн остаётся сильным перед лицом даже самых сложных трудностей.'}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>
                    <Text variant={'h2'} children={'Ресурсы и их ценность'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'В подводном мире существует очень большое количество разных ресурсов, каждый из которых по-своему полезен. Но есть и те, что ценятся выше остальных - их значимость зависит от сложности добычи и количества в природе. '}/>

                    <div className={styles.rowToColumn}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦ Некоторые виды рыб и животных'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Громовой скат, Тенебрал, Ночной Карс) — тяжело поймать, но мясо этих существ крайне питательно и полезно;'}/>
                            </div>
                        </div>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Редкие растения и водоросли'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Кровоцвет, Синетравка, Железный Сальвум) — имеют уникальные свойства, богатые полезными нутриентами, используются в лекарствах и микстурах;'}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦ Костяные кораллы'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Фортиллия, Оксирин, Карборр)— отдельная группа кораллов, невероятно твердых но податливых при обработке, прекрасно подходят для изготовления инструментов;'}/>
                            </div>
                        </div>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦ Морская древесина'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Теневое дерево, Синелист) — кора подводных деревьев редкого цвета, позволяющая строить незаметные дома и скрытые хранилища;'}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦ Кости больших существ'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Осколки гигантов, кости Древних Глубоководных виверн) — останки давно вымерших морских чудовищ, чьи кости намного крепче, чем обычные кости китов;'}/>
                            </div>
                        </div>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Минералы и кристаллы'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Лунный кварц, Буревестник, Черный жемчуг, Осколки бездны, Морской сапфир)— ритуальные камни, помогающие в прогнозировании течений, используются в церемониях и праздниках;'}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowToColumn}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Морское стекло'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'материал массово используемый в культуре виверн (в витражах, памятниках, реликвиях), сложен в добыче из-за границы с Великим Тягуном;'}/>
                            </div>
                        </div>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Соль'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'(Огненная, Бездная) — редчайшие виды соли, позволяющие хранить пищу особенным образом в экстремальных условиях;'}/>
                            </div>
                        </div>
                    </div>

                    <img src={'/images/article/community/Picture12.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Это лишь некоторые из видов редких ресурсов, которые особенно ценятся Глубоководными вивернами. Их добыча требует времени, усилий и мастерства, ведь многие из этих материалов сложно найти, а некоторые — опасно добывать. Именно поэтому важно не только получать ценные ресурсы, но и грамотно управлять ими.'}/>

                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>
                    <Text variant={'h2'} children={'Распределение ресурсов'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Все добытые материалы и ресурсы в общине важно отслеживать, чтобы виверны могли учитывать их предотвращая нехватку. Хранением и учетом ресурсов занимаются Распорядители из клана Мастеров. Они отслеживают запасы еды, подсчитывают количество потребляемой пищи, смотрят на затрачиваемые на строительство материалы. На случай катастроф или неудачных охот, умелые Распорядители держат стратегические запасы, храня их в специальных подводных хранилищах. Эта работа незаметна, но именно она делает так, чтобы община не голодала и всегда была готова к неожиданностям. '}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'У Глубоководных виверн есть ежедневная порционная норма еды и она разнится в зависимости от размера, роста и возраста виверны. Каждый член общины может охотиться самостоятельно и добывать ресурсы для личных целей, если это не мешает основному его виду деятельности. Если пищи в общине начинает не хватает, виверны могут ввести ограничения. В таких случаях, частный отлов временно прекращается, а вся самостоятельно добытая еда идет напрямую в общину. В случае острого дефицита еды, в приоритете кормление Охотников и Светлых Собирателей. '}/>
                    <img src={'/images/article/community/Picture13.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Мастера и Кузнецы получают материалы в первую очередь, затрачивая их на снасти, приманки, орудия для отлова, и создание жилищных пещер. Строительные материалы расходуются по мере необходимости, но в случае, если община в процессе расширения, приоритет отдается Мастерам.'}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Некоторые виды ресурсов, такие как редкие кристаллы, минералы, глубинные кораллы, целебные растения, расходуются не сразу. Они ждут своего часа либо в подводных хранилищах виверн, либо у Хранителей, занимающихся ритуалами и лечением больных виверн.'}/>


                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Борьба с дефицитом'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text color={'#BABCDB'} className={styles.alignCenterText}
                              children={'С нехваткой ресурсов виверны справляются разными способами. Чаще всего это временное изменение клановой структуры, обмен с общинами извне или, в самых крайних случаях - переселение. '}/>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#FFFFFF'} children={'✦  Переформирование'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'Когда какой-то из ресурсов в общине начинает заканчиваться, первое что делают Распорядители - это сообщают об этом клану, ответственному за него. Глава клана обязан принять меры для разрешения проблемы, чтобы предотвратить дефицит. Если ситуация не улучшается, виверны могут принять решение временно переформировать Союз Гнезд для восстановления баланса. '}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#F5DFCA'} children={'✦   Обмен и торговля'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'Общины держат сообщение благодаря Водным Вестникам с каждой из сторон. Это позволяет вивернам договариваться об обмене ресурсами на взаимовыгодных условиях. Отношения между общинами, как правило, нейтрально-положительные, однако приоритет всегда остаётся за заботой о собственных членах. Помощь другим оказывается лишь после обеспечения своих.'}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Миграция'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'}
                                      children={'Когда рыба покидает воды вокруг общины, а количество опасных хищников растет и местность становится непригодной для жизни виверн, община может принять решение переселения в другое место. Тогда виверны обращаются к Странникам, что держат варианты новых локаций на “запасной” случай. '}/>
                            </div>
                        </div>
                    </div>

                    <img src={'/images/article/community/Picture14.jpg'} className={styles.image}/>


                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Переселение - очень сложный, долгий и опасный процесс для любого вида общины. На пути к новым землям часть виверн может погибнуть, особенно если среди них есть много малышей или стариков. Самые древние виверны, чаще всего, принимают самостоятельное решение покинуть общину, чтобы не быть балластом в нелегком пути. Они отправляются на Курган костей - в последний путь. '}/>

                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Кризис'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Насколько бы подготовленной не была община, в любой момент в океане может случиться по-настоящему непредвиденная ситуация: миграция крупных стай хищников через владения виверн, покидание рыбой территорий общины, резкое изменение водных течений, гибель виверн от тяжёлого заболевания и многое другое. В таких ситуациях община должна принимать важные коллективные решения. '}/>
                    <Text variant={'h2'} children={'Голосование и “Выбор Глав”'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'В любой системе важен порядок. Хоть среди Глубоководных виверн и царит условное равноправие, а единого письменного документа о законах нет, это не отменяет факта наличия системы суда и голосования, которые помогают решать конфликты.'}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'В самых стрессовых ситуациях, когда становится тяжело ориентироваться на мнение большинства, виверны прибегают к “Выбору глав” — голосованию, где в качестве мнений общины выступают самые опытные и мудрые виверны каждого из кланов. К этой системе обращаются в экстренных ситуациях, когда виверны помладше не могут рационально оценить ситуацию в условиях паники. '}/>


                    <img src={'/images/article/community/Picture15.jpg'} className={styles.image}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Главы кланов - авторитет для всей общины. Решение, принятое в рамках “Выбора глав” обязательно. Неподчинение может расцениваться как угроза итак хрупкому балансу общины. В условиях кризиса, требующего быстрых действий, подобное поведение может повлечь за собой наказание.'}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>
                    <Text variant={'h2'} children={'Суд и наказания'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                          children={'Каждое действие виверны так или иначе влияет на общину, частью которой она является. Любые неправильные поступки могут негативно повлиять на остальных членов общества. Наказания в данном случае не карают — они воспитывают и напоминают о важности общества и учат ответственности. '}/>

                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#FFFFFF'} children={'✦  Мелкий разлад'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Неопасные, но ощутимые нарушения уклада виверн. Они не причиняют прямого вреда общине, но нарушают ощущение единства: отказ от участия в Клановом деле, грубость старшим, проявление высокомерия или гордыни. '}/>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Наказание: Решение по наказанию выводит глава Клана, к которому принадлежит виверна на момент нарушения. Это может быть мягкое наставление, личный разговор с главой, временное ограничение участия в обрядах, голосовании или дополнительные обязанности. Часто, обсуждение нарушения не выходит за пределы Клана.'}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#F5DFCA'} children={'✦   Угроза единству '}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Более серьезные проступки, вызывающие напряжение или тревогу в общине. Чаще всего это действия, которые подрывают доверие виверн: прямая агрессия, драка, умышленное искажение правды, отказ следовать “Выбору глав”, кража или воровство.'}/>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Наказание: На суде Глава одного из Кланов озвучивает обвинение. Решение по наказанию обсуждается между всеми вивернами, которых выслушивают в порядке очереди. Итоговое решение принимается исходя из голосования, но последнее слово остается за Главой Клана, к которому принадлежит нарушитель. Наказание может вести за собой временное ограничение прав, частичную изоляцию или дополнительные работы.'}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.points}>
                        <div className={styles.headerAndBody}>
                            <Text color={'#E6C196'} children={'✦  Изгнание'}/>
                            <div className={styles.bodyHeadAndBody}>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Действия, которые несовместимы с жизнью внутри общины, а именно: предательство, многократные проступки после предыдущих нарушений или убийство внутри общины. '}/>
                                <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                                      children={'Наказание: Изгнание. Виверна лишается всякой поддержки и места в общине. Возможность возвращения не рассматривается. '}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ass}>
                    <div className={styles.assIn}>
                        <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>
                        <Text variant={'h2'} children={'Культура Океана'} className={styles.alignCenterText}/>
                        <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                              children={'Жизнь в недрах Океана — это постоянное испытание. Стихия непредсказуема, ресурсы ограничены, а одиночество часто становится началом конца. В таких условиях община для Глубоководной виверны — не просто укрытие, а живой организм, где взаимная поддержка, ответственность и усилия каждого дают шанс на выживание. '}/>
                        <Text color={'#BABCDB'} className={styles.alignJustifiedText} indent={28}
                              children={'Отдельного внимания заслуживает богатая культура виверн: традиционные обряды, инициации вплетённые в повседневную жизнь. Всё это раскрывает более глубокий смысл существования в общине — и об этом я расскажу в следующих статьях. '}/>

                        <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                        <Text color={'#E6C196'} variant={'h1'} children={'Поддержите автора!'}
                              className={styles.alignCenterText}/>
                        <div className={styles.halfContainer}>
                            <Text color={'#E6C196'} italic={true} className={styles.alignCenterText}
                                  children={'Все иллюстрации в высоком качестве и эксклюзивы доступны в моих платных Telegram-каналах. Там же вы найдёте уникальные материалы о сеттинге, вивернах и их мире: размножение, физиология, развитие и многое другое!  Сайт будет постоянно пополняться — вы можете помочь ему развиваться быстрее, поддержав проект донатом или подпиской.'}/>
                            <Text color={'#E6C196'} italic={true} className={styles.alignCenterText}
                                  children={'Спасибо, что вы со мной!'}/>
                        </div>
                        <div className={styles.buttonSubscribeWrapper}>
                            <div>
                                <Text 
                                    color={'#E6C196'} 
                                    onClick={() => window.location.href = 'https://t.me/ZhurzhArt'} 
                                    variant={'button'} 
                                    children={'Подписаться'}
                                    className={styles.buttonSubscribe}
                                    imageSrc={'/images/article/community/telegram.svg'}
                                    />
                            </div>
                        </div>
                    </div>

                    <picture>
                        <source
                            media="(max-width: 400px)"
                            srcSet="/images/article/community/mockupMobile.png"
                        />
                        <img
                            src="/images/article/community/mockup.png"
                            className={styles.imageButton}
                            alt="Community Mockup"
                        />
                    </picture>

                </div>
            </div>

            <div className={styles.footerWrapper}>
                <div className={styles.footer}>
                    <Text variant={'sign'} color={'#727272'} className={styles.alignJustifiedText} indent={28}
                          children={'Глубоководные виверны являются закрытым авторским видом. С 1 июня 2023 года их приобретение возможно исключительно путём покупки концептуальных адоптов у правообладателя. Любые существа, созданные по инструкции «Морская Реминисценция» без участия автора, не признаются частью проекта.'}/>
                    <Text variant={'sign'} color={'#727272'} className={styles.alignJustifiedText} indent={28}
                          children={'Автор не претендует на исторические образы драконов и не рассматривает их в качестве своей интеллектуальной собственности. На настоящем сайте размещены исключительно оригинальные материалы, созданные в рамках проекта «Морская Реминисценция».'}/>
                    <Text variant={'sign'} color={'#727272'} className={styles.alignJustifiedText} indent={28}
                          children={'Все тексты, иллюстрации и иные объекты, размещённые на сайте, являются результатом интеллектуальной деятельности и охраняются авторским правом. Любое воспроизведение, распространение, модификация или использование материалов без письменного согласия автора, включая их использование для обучения нейросетей или создания производных работ, запрещено. Нарушение указанных условий влечёт ответственность в соответствии с действующим законодательством об авторском праве. Для получения разрешений и решения вопросов использования материалов просьба обращаться к автору проекта.'}/>
                    <Text/>
                </div>
                <Text variant={'sign'} color={'#727272'} className={styles.alignCenterText}
                      children={'© ZHURZH, «Морская Реминисценция», 2025.'}/>
                <Text variant={'sign'} color={'#727272'} className={styles.alignCenterText}
                      children={'Все права защещины'}/>
            </div>
        </>
    )
}
