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
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                          children={'... В мире Морской реминисценции подводная община - это группа виверн, живущих на одной территории и помогающих друг другу выживать. Это как большая семья, где каждый ее соплеменник выполняет свою функцию и роль, выбранную по его качествам и умениям. У каждой общины есть свои правила и традиции, соблюдая которые, виверны могут существовать в мире и понимании. При возникновении проблем, виверны собираются вместе и ищут пути их решения. Но главное - это взаимная поддержка и единство, так как только будучи сплоченными, подводные жители могут быть способны справиться с трудностями и опасностями океана. '}/>
                    <Text color={'#BABCDB'} className={styles.alignJustifiedText}
                          children={'... У каждой общины есть свои правила и традиции, соблюдая которые, виверны могут существовать в мире и понимании. При возникновении проблем, виверны собираются вместе и ищут пути их решения. Но главное - это взаимная поддержка и единство, так как только будучи сплоченными, подводные жители могут быть способны справиться с трудностями и опасностями океана.'}/>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <img src={'/images/article/community/1.png'} className={styles.imageNoGap}/>
                    <Text italic={true} color={'#E6C196'} className={styles.alignCenterText}
                          children={'“…Глубоководные виверны самодостаточные сильные существа , способные охотиться и выживать в дикой природе. Но в условиях опасного подводного мира, большая часть из них примыкает к общинам, собирающихся по 25-30 особей…” — фрагмент из статьи Виверны. '}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Почему община?'} className={styles.alignCenterText}/>
                    <div className={styles.halfContainer}>
                        <Text italic={true} color={'#BABCDB'} className={styles.alignCenterText}
                              children={'Виверны на протяжении веков выживали в суровых условиях подводного мира, ища тот образ жизни, который обеспечил бы им безопасность и благополучие: '}/>
                    </div>

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
                    <img src={'/images/article/community/2.png'} className={styles.image}/>
                    <Text color={'#BABCDB'}
                          children={'На настоящий момент, к сожалению, от социальной памяти Глубоководных виверн осталось совсем немного. Подводная культура жителей воды в упадке, однако, важные этапы их развития, как вида, сохранились в памяти старейшин различных общин по всему Океану. '}/>
                    <Text color={'#E6C196'} children={'· ✦ · ✦ · ✦ ·'} className={styles.alignCenterText}/>

                    <Text variant={'h2'} children={'Устройство'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'}
                          children={'Структуру общин Глубоководных виверн можно назвать “Клановым союзом” или “Союзом гнезд”, где каждая группа виверн берет на себя определенную роль в той сфере, в которой она наиболее успешна. В этой системе все вопросы, касающиеся общего выживания, обсуждаются на равных до тех пор, пока не будет найдено решение. Если же спор заходит в тупик, главные представители кланов (отвечающие за соответствующие сферы) берут на себя роль “голосов” общины и продолжают обсуждение между собой, стремясь найти компромисс.'}/>
                    <img src={'/images/article/community/3.png'} className={styles.image}/>
                    <Text color={'#BABCDB'}
                          children={'Клановая система помогает вивернам жить вместе на взаимовыгодных условиях. Например, виверны, которые не имеют опыта в добыче пищи, компенсируют это благодаря помощи охотников, в то время как сами занимаются разведкой или собирательством. '}/>

                    <Text variant={'h2'} children={'Размер общин'} className={styles.alignCenterText}/>
                    <Text color={'#BABCDB'}
                          children={'Как уже упоминалось, виверны нередко создают сообщества по 25-30 особей, что считается довольно крупными общинами. Существуют и более мелкие или средние группы. И их размер определяется такими факторами, как местоположение, уровень безопасности, доступность пищи и удаленность от других виверн: '}/>
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
                    <Text color={'#BABCDB'}
                          children={'Численность общины часто меняется, в зависимости от уровня смертности и рождаемости внутри нее. Также, некоторые виверны могут добровольно покидать общины или быть изгнаны за серьезные нарушения правил. Иногда одиночки присоединяются к общинам сами или просто переходят из одной в другую. '}/>
                    <Text color={'#BABCDB'}
                          children={'Виверны живут в нестабильных условиях из-за частых природных катаклизмов и угроз со стороны. Обычно, большие общины не перемещаются и не кочуют, предпочитая оставаться на месте, несмотря на опасности. В таких сообществах есть как многочисленные семьи, так и одиночки, пришедшие из других регионов. Маленькие общины могут кочевать в поисках более безопасного места для жизни.'}/>


                </div>
            </div>
        </>
    )
}
