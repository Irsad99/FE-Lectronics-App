import React from 'react'
import { Pagination } from 'react-bootstrap'
import style from './pagination.module.css'

function Paginations() {
    return (
        <Pagination itemclassName="page-item" linkclassName="page-link" className={style.pagination}>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Item>{8}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}

export default Paginations
