package com.soon.hongsb.main;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "navigation")
public class Navigation {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;

    @Column
    private String menuName;

    @Column
    private String menuDetail;

    @Column
    private String menuId;

    @Column
    private String menuUrl;

    @Column
    private int menuOrder;


    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getMenuDetail() {
        return menuDetail;
    }

    public void setMenuDetail(String menuDetail) {
        this.menuDetail = menuDetail;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
    }

    public int getMenuOrder() {
        return menuOrder;
    }

    public void setMenuOrder(int menuOrder) {
        this.menuOrder = menuOrder;
    }
}
