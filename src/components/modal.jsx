import React from 'react';

const Modal = ({setModalOpened}) => {
    return (
        <div className="modal-custom position-absolute top-50 start-0 translate-middle" id="exampleModalLong"
             tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex align-items-between">
                        <h5 className="modal-title" id="exampleModalLongTitle">ԱՅԲՈՒԲԵՆԻ ՄԱՍԻՆ</h5>
                        <button onClick={() => setModalOpened(false)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Հայերենի այբուբեն կամ հայոց գրեր, հայերենի հնչյունաբանական գրերի համակարգը, որը ստեղծվել է
                            Մեսրոպ Մաշտոցի կողմից հայերենի համար։ Հայերեն գիրը ստեղծողի անունով հաճախ անվանվում է նաև
                            մեսրոպյան գիր կամ մեսրոպյան այբուբեն։

                            Գրերի գյուտը տեղի է ունեցել 405 թվականին։ Մեսրոպյան այբուբենը ունի 36 տառ, որոնք ունեն
                            գործառական ինքնատիպություն՝ սերում են այլագիր կամ հայագիր նախատիպերից։ 11-րդ դարում
                            ավելացվել է ևս երկու տառ՝ Օ և Ֆ։ 11-րդ դարից ի վեր հայերենի գրային համակարգում գրեթե
                            փոփոխություններ չեն եղել։

                            Նախամեսրոպյան շրջանում հայերեն գրի և գրականության առկայությունը միանշանակորեն չի ընդունվում
                            հայերենագետների կողմից։ Նրանց մի մասը գտնում է, որ նախամեսրոպյան շրջանում հայերը ունեցել են
                            գիր և գրականություն, իսկ մյուս մասը հերքում է այս տեսակետը։

                            Ժամանակակից արևելահայերենի այբուբենը ունի 38 տառ, որտեղ «ու»-ն համարվում է առանձին տառ, իսկ
                            «ւ» տառը և «և» կցագիրը հանված են այբուբենից։ Այբուբենում տառերի թիվը նույնպես
                            միանշանակորեն չի ընդունվում հայերենագետների կողմից։

                            Հայկական գիրը միատարր ու միատիպ չէ և ներկայացված է մի շարք տարատեսակներով, որոնք անվանվում
                            են գրատեսակներ։
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
