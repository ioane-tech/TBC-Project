import React, { useState } from 'react'
import { coursesData } from '../CoursesData'

import Carousel from "react-elastic-carousel"

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function TbcXUsaidPage() {

  const [firstQuestionOpen,setFirstQuestionOpen]=useState(false)
  const [secondQuestionOpen,setSecondQuestionOpen]=useState(false)
  const [thirdQuestionOpen,setThirdQuestionOpen]=useState(false)

  const breakPoints=[
    {width:1,itemToShow:1},
    {width:550,itemToShow:2},
    {width:768,itemToShow:3},
    {width:1200,itemToShow:4},

  ]
  return (
    <div className='TBCxUSAID_main_div'>
        <img src="./images/posterImg.png" alt="poster image" className='poster_img' />
        <div className='poster_text'>
          <p>TBC x USAID</p>
          <p>ტექნოლოგიური განათლებისთვის</p>
        </div>

        <div className='about_div'>
          <p className='about_text'>
            „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს 
            გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. 
            წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
            
          <p className='about_text_more'>გაიგე მეტი</p> 
          </p>
        </div>

        
    {/**courses */}
      <div className='courses_div'>
        <h3>სასწავლო კურსები</h3>

        <div className='courses_container'>
          {coursesData &&
          
            coursesData.map((value,index)=>(
              <div key={index} className='courses_each_item'>
                <img src={value.img} alt={value.title} />
                <div> 
                  <h4>{value.title}</h4>
                  <h5>{value.availability}</h5>
                </div>
                <p>➜ კურსის დეტალები</p>
              </div>
            ))
          }
        </div>
      </div>

      {/************carosuel******/}
      <div className='carousel_header_div'><p>პროექტის პარტნიორები</p></div>
      <Carousel className='carosuel_container' breakPoints={breakPoints}>
        <div>
          <img className='carousel_img' src="/images/1_carousel_img.png" alt="" />
          <img className='carousel_img' src="/images/2_carousel_img.png" alt="" />
          <img className='carousel_img' src="/images/3_carousel_img.png" alt="" />
        </div>

        <div>
          <img className='carousel_img' src="/images/4_carousel_img.png" alt="" />
          <img className='carousel_img' src="/images/5_carousel_img.png" alt="" />
          <img className='carousel_img' src="/images/6_carousel_img.png" alt="" />
        </div>

        <div>
          <img className='carousel_img' src="/images/7_carousel_img.png" alt="" />
        </div>
      </Carousel>


     {/************questions******/}
        <div className='questions_div'>
          <div className='questions_container'>
            <span className='questions_header'>ხშირად დასმული კითხვები</span>
            <span className='all_questions'>ყველა კითხვა</span>

            <div className="answers_container">
              <div 
                onClick={()=>
                  {
                    setFirstQuestionOpen(!firstQuestionOpen);
                    setSecondQuestionOpen(false);
                    setThirdQuestionOpen(false)
                  }
                } 
                className='each_question'
              >
                <span>როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?</span>
                
                {
                  firstQuestionOpen?
                  <span className='arrow_down'><MdOutlineKeyboardArrowUp/></span>
                  :
                  <span className='arrow_down'><MdOutlineKeyboardArrowDown /></span>
                }

                {
                  firstQuestionOpen &&
                  <>
                    <p>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</p>
                    <p style={{paddingLeft:"30px"}}>
                      <strong>I ეტაპი</strong> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, 
                      რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული 
                      განცხადებების გადარჩევა. 
                      <p>
                        <strong>II ეტაპი</strong> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს 
                        პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, 
                        სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
                      </p>  

                      <p>
                        <strong>III ეტაპი</strong> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება 
                        გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, 
                        ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, 
                        რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
                        IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის 
                        შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
                      </p>
                    </p>

                    <p>
                      * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, 
                      ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. 
                    </p>
                  </>
                }
                <hr />
              </div>

              <div 
                onClick={()=>
                  {
                    setSecondQuestionOpen(!secondQuestionOpen);
                    setFirstQuestionOpen(false);
                    setThirdQuestionOpen(false)
                  }
                } 
                className='each_question'
              >
                <span>შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?</span>
                {
                  secondQuestionOpen?
                  <span className='arrow_down'><MdOutlineKeyboardArrowUp/></span>
                  :
                  <span className='arrow_down'><MdOutlineKeyboardArrowDown /></span>
                }
                {
                  secondQuestionOpen &&
                  <>
                    <p>
                      TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს 
                      აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, 
                      სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
                    </p>
                  </>
                }
                <hr />
              </div>

              <div 
                onClick={()=>
                  {
                    setThirdQuestionOpen(!thirdQuestionOpen);
                    setSecondQuestionOpen(false);
                    setFirstQuestionOpen(false)
                  }
                } 
                className='each_question'
              >
                <span>რა ღირს სწავლა პროგრამის ფარგლებში?</span>
                {
                  thirdQuestionOpen?
                  <span className='arrow_down'><MdOutlineKeyboardArrowUp/></span>
                  :
                  <span className='arrow_down'><MdOutlineKeyboardArrowDown /></span>
                }
                {
                  thirdQuestionOpen && 
                  <p>
                    პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.
                  </p>
                }
                <hr />
              </div>
            </div>
          </div>

        </div>

      {/***************footer********* */}
      <div className='footer_div'>
        <div>
          <img src="/images/tbcFooterLogo.png" alt="" />
          <p>© 2023 ყველა უფლება დაცულია</p>
          <p>წესები და პირობები</p>
        </div>

        <div>
          <div>
              <img src="/images/icons_img.png" alt="" />
          </div>
          <button>მოგვწერეთ</button>
        </div>
      </div>
    </div>
  )
}

export default TbcXUsaidPage