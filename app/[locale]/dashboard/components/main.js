'use client'
import {
    Card,
    CardHeader,
    DropdownToggle,
    Table,
    Spinner,
    Breadcrumb,
    BreadcrumbItem,
    Pagination,
    Badge,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import Link from "next/link";
import { BiHome, BiPencil, BiVerticalCenter } from 'react-icons/bi';
import { FaEllipsisV } from 'react-icons/fa';
import AddModal from './addmodal';
import { useState } from 'react';

const data = [
    {
        petitioner: 'Sadıqov Bilal Daşqın',
        date: '28.01.2024',
        country: 'Kanada',
        amount: '23.00 AZN',
        type: 'Tələbə vizası',
        status: 'pending',
    },
    {
        petitioner: 'Aliyeva Leyla Rüstəm',
        date: '15.02.2024',
        country: 'Almaniya',
        amount: '45.00 AZN',
        type: 'İş vizası',
        status: 'approved',
    },
    {
        petitioner: 'Hüseynov Tofiq Elşən',
        date: '03.03.2024',
        country: 'İtaliya',
        amount: '30.00 AZN',
        type: 'Turist vizası',
        status: 'rejected',
    },
    {
        petitioner: 'Məmmədov İsmayıl Faiq',
        date: '21.04.2024',
        country: 'Fransa',
        amount: '50.00 AZN',
        type: 'Tələbə vizası',
        status: 'pending',
    },
    {
        petitioner: 'Abdullayeva Sevinç Rəşad',
        date: '05.05.2024',
        country: 'ABŞ',
        amount: '60.00 AZN',
        type: 'İş vizası',
        status: 'approved',
    },
    {
        petitioner: 'Quliyev Orxan Samir',
        date: '16.06.2024',
        country: 'Yaponiya',
        amount: '40.00 AZN',
        type: 'Turist vizası',
        status: 'pending',
    },
    {
        petitioner: 'İbrahimli Ləman Fərid',
        date: '27.07.2024',
        country: 'Güney Koreya',
        amount: '35.00 AZN',
        type: 'Tələbə vizası',
        status: 'rejected',
    },
    {
        petitioner: 'Rəsulov Elçin Məhərrəm',
        date: '08.08.2024',
        country: 'İngiltərə',
        amount: '55.00 AZN',
        type: 'İş vizası',
        status: 'approved',
    },
    {
        petitioner: 'Əliyeva Zəhra Natiq',
        date: '19.09.2024',
        country: 'Avstraliya',
        amount: '25.00 AZN',
        type: 'Turist vizası',
        status: 'pending',
    },
    {
        petitioner: 'Qasımov Rüfət Tahir',
        date: '30.10.2024',
        country: 'Norveç',
        amount: '70.00 AZN',
        type: 'Tələbə vizası',
        status: 'approved',
    },
    {
        petitioner: 'Hacıyeva Günel Elmar',
        date: '11.11.2024',
        country: 'İspaniya',
        amount: '65.00 AZN',
        type: 'İş vizası',
        status: 'rejected',
    }
];

const Main = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    return <div className="p-5">
        <div className="col-12 mb-3">

            <div className="d-flex justify-content-between align-items-center">
                <Breadcrumb>
                    <BreadcrumbItem >
                        <Link href={'/'}>
                            <BiHome size={15} />
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <span>Viza müraciətləri</span>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button
                    onClick={() => setShowAddModal(z => !z)}
                    className="theme-btn border-0 rounded-0 btn-style-one"
                >
                    <span className='btn-title text-white'>
                        Əlavə et</span>
                </Button>
            </div>
        </div>
        <div className="col-12">


            <div className="row">

                <div className="col-12">


                    {true ? (
                        <div className="min-height-table">
                            {data?.length > 0 ? (
                                <>
                                    <Table size='sm' bordered striped responsive hover>
                                        <thead>
                                            <tr>
                                                <th className='text-start p-2'>MÜRACİƏTÇİ</th>
                                                <th className='text-start p-2'>TARİX</th>
                                                <th className='text-start p-2'>ÖLKƏ</th>
                                                <th className='text-start p-2'>MƏBLƏĞ</th>
                                                <th className='text-start p-2'>VİZA NÖVÜ</th>
                                                <th className='text-start p-2'>STATUS</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map(item => (
                                                <tr

                                                    className="monitoringTableTr"
                                                    key={item?.petitioner}
                                                >
                                                    <td className='text-start p-2'>{item?.petitioner}</td>

                                                    <td className='text-start p-2'>{item?.date}</td>
                                                    <td className='text-start p-2'>{item?.country}</td>
                                                    <td className='text-start p-2'>{item?.amount}</td>
                                                    <td className='text-start p-2'>{item?.type}</td>
                                                    <td>
                                                        <Badge
                                                            pill
                                                        >
                                                            {item?.status}
                                                        </Badge>
                                                    </td>
                                                    <td className='text-center' >
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle style={{
                                                                background: 'transparent',
                                                                color: 'black',
                                                                border: 'none'
                                                            }}><FaEllipsisV /></DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    Düzəliş et
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    Nəmnəsə et
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown></td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <br />
                                    {/* <Pagination
                                        align="end"
                                        className="pagination-bar"
                                        //   setCurrentPage={setCurrentPage}
                                        totalCount={20}
                                        pageSize={10}
                                    // onPageChange={page => setCurrentPage(page)}
                                    /> */}
                                </>
                            ) : (
                                <NoResult />
                            )}
                        </div>
                    ) : (
                        <div style={{ padding: '1.5rem 1.5rem' }} className="list-item">
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>

        </div>
        {showAddModal && <AddModal modal={showAddModal} setModal={setShowAddModal} />}

    </div>
};

export default Main;
